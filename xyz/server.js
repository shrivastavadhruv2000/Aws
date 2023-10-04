var express = require('express');
var app = express();
app.use(express.static('public'))
app.get("/",(req,res)=>{res.send("Rasik's Resturant");});
app.listen(9000);
console.log("app is listening to port 9000");