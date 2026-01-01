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
  res.render("project"); //res.send()
});

app.get("/reja", function (req, res) {
  res.render("reja"); //res.send()
});







module.exports = app