var mango=require('mongodb');

var MongoClient = require('document').MongoClient;
var url = "mongodb://localhost:3000/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});



// var MongoClient = require('document').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.createCollection("employees", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });





// var MongoClient = require('document').MongoClient;
// var url = "mongodb://localhost:3000/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   var myobj = { nameEmpID:1245, empName:"ABC", Department:"IT", "Email:abc@gmail.com", Phone: 9650119744};
//   dbo.collection("employees").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("employee detail inserted");
//     db.close();
//   });
// });
