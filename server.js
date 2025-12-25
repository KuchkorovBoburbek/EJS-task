// Bugungi darsimizda ExpressJs framework orali Server-side rendering app ustida ishlaymiz 

// BRR 
// console.log("Bismillah");

const express = require("express");
const app = express();
const http = require("http")
const fs = require("fs");


let user; 
fs.readFile("databese/user.json", "utf8", (err, data)=>{
  if(err){
    console.log("ERROR", err)
  } else{
    user = JSON.parse(data)
  }
})


//1 
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2 SESSION
//3 
app.set("views", "views")
app.set("view engine", "ejs")


//4 
app.get("/author", function (req, res) {
  res.render("author", {user: user});
});


app.get("/", function (req, res) {
  res.render("project"); //res.send()
});




const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function(){
    console.log(`서버가 정상 작동 중입니다: ${PORT}`);
})