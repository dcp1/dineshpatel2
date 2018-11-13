var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));



//Routes

app.get("/", function(req,res){
    
    res.render("main");
});

app.get("/profile", function(req,res){
    
    res.render("profile.ejs");
});

app.get("/color", function(req,res){
    
    res.render("color");
});

//app.listen goes on bottom
app.listen(process.env.PORT,process.env.IP, function(){
    console.log("This is app.listen in DineshPatel/app.js");
});
//no more codes
