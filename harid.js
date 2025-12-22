// Bugungi darsimizda ExpressJs framework orali Server-side rendering app ustida ishlaymiz 

// BRR 
// console.log("Bismillah");

const { log } = require("console");
const express = require("express");
const app = express();
const http = require("http")

//1 
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2 SESSION
//3 
app.set("views", "views")
app.set("view engine", "ejs")


//4 
app.get("/", function(req, res){
  res.render("harid")
})

app.post("/create-item", (req, res)=>{
    console.log(req.body);
    res.json({test: "success"})
})



const server = http.createServer(app);
let PORT = 8080;
server.listen(PORT, function(){
    console.log(`서버가 정상 작동 중입니다: ${PORT}`);
})