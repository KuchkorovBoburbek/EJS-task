const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://mark:NocUhwxIoXuEirEH@cluster0.5ktrx1n.mongodb.net/REJA=Cluster0";

mongodb.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) {
      console.log("ERROR on connection MongoDB");
    } else {
      
      console.log("MongoDB connection succeed");
      module.exports = client
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `서버가 정상 작동 중입니다: ${PORT} , http://localhost:${PORT}`
        );
      });
    }
  }
);
