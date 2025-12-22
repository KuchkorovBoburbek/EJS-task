// Bugungi darsimizda ExpressJs framework orali Server-side rendering app ustida ishlaymiz 

// BRR 
// console.log("Bismillah");

const express = require("express");
const app = express();
const http = require("http")

//1 
app.use(express.static("public"));
app.use(express.json());
app.use(express.json(express.urlencoded({extended: true})));

//2 SESSION
//3 
app.set("views", "views")
app.set("view engine", "ejs")


//4 
app.get("/", function(req, res){
    res.end(`<h1>Hello World by Mark</h1>`);
})

app.get("/home", function (req, res) {
  res.end(`<h1>Siz home pagedasiz</h1>`);
});


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function(){
    console.log(`Server ushbu portda yaxshi ishlayabdi: ${PORT}`);
})