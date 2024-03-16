var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://0.0.0.0:27017/restaurant',{ useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

// document.getElementById("loginForm").addEventListener("submit", function(event) {
//     event.preventDefault();
  
//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;
  

app.post("/sign_up",(req,res)=>{
    var name = req.body.fullName;
    var email = req.body.email;
    var phno = req.body.phoneNumber;
    var password = req.body.password;
    console.log(name);
    console.log(email);

    var data = {
        "_id": email,
        "name": name,
        "email" : email,
        "phno": phno,
        "password" : password
    }

    db.collection('users').insertOne(data,(err,collection)=>{
        // if(err){
        //     throw err;
        // }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('signup_success.html')

})

app.post("/sign_in",(req,res)=>{
    var email = req.body.email;
    var password = req.body.password;

    var data = {
        "email" : email,
        "password" : password
    }

    db.collection('users').insertOne(data,(err,collection)=>{
        // if(err){
        //     throw err;
        // }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('signup_success.html')

})

// app.post("/login", (req, res) => {
//     const { username, password } = req.body;


app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html');
}).listen(3000);


console.log("Listening on PORT 3000");