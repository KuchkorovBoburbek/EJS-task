// Bugungi darsimizda ExpressJs framework orali Server-side rendering app ustida ishlaymiz 

// BRR 
// console.log("Bismillah");

const express = require("express");
const app = express();

const fs = require("fs");


let user; 
fs.readFile("databese/user.json", "utf8", (err, data)=>{
  if(err){
    console.log("ERROR", err)
  } else{
    user = JSON.parse(data)
  }
})


// MOngoDB chaqirish
const db = require("./server").db() // mongoDB objectni bizga beradi , Keyinchakik biz bu objectga  CRUD qila olamiz

//1  KIRISH
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2 SESSION
//3  VIEWS CODE
app.set("views", "views")
app.set("view engine", "ejs")


//4  ROUTING code
app.get("/author", function (req, res) {
  res.render("author", {user: user});
});


app.get("/", function (req, res) {
  console.log("User entered /");
  db.collection("plans").find().toArray((err, data)=>{
    

    if(err){  //endi bu bizga kk emas chunki endi axiosdan foydalanamiz 
      console.log(err)
      res.end("Something went wrong")
    } else{
      // console.log(data) // bu yer hozircha bosh array qaytaradi, hali dbda data yozmadik .
      // db ga datalar successfully yozildi endi datalar saf tortib kebyotibdi . endi bu datalarni biz ejsga yozamiz
     
      res.render("reja", {items: data})
    }
  })


  // res.render("reja"); //res.send()
});

app.post("/create-item", (req, res)=>{
  //TODO:code with db here
  console.log("User entered /created item");
  // res.end("success")  // biz endi shu rejani db gag yozamiz
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({reja: new_reja}, (err, data)=>{ // insertOne - 1ta qoshish degan manoni anglatadi

    console.log(data.ops);
    res.json(data.ops[0]);
    // mongodb 4+versiondan boshlab ops ishlamaydi 
    //Ozi ops nima ? => bu mongo db ga oxirgi yozilgan datani ops ga solib qaytaradi 
    // shuning ucun u 1 ta data boladi va [0] indexdagini olsak uni qolga olamiz
    // endi quyidagi kkk emas chunki endi biz axiosdan req yuboramiz
    // if(err){
    //   console.log(err);
    //   res.end('Something went wrong!')
    // } else{
    //   res.end('Successfully added')
    // }
  })
})







module.exports = app