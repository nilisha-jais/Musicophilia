const express =  require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();



app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));



mongoose.connect("mongodb://localhost:27017/Musicophilia",{
    useNewUrlParser:true, useUnifiedTopology: true
}).then(()=>console.log("successfull"))
.catch((err)=>console.log(err));

const usersSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    confirmPassword:String,
});

const usersModel = new mongoose.model("users",usersSchema);

// const user = new usersModel(
//     {
//         name:"jugesh",
//         email:"jugesh@gmail.com",
//         password:"12345",
//         confirmPassword:"12345",
//     }
// );
// user.save();

app.get("/",(req,res)=>{
res.sendFile(__dirname+"/login/login.html");
});


app.post("/",(req,res)=>{
  const name = req.body.name;
 const email = req.body.email;
  const password = req.body.password;
 const confirmPassword = req.body.confirmPassword;
//  console.log(name);
//  console.log(email);
//  console.log(password);
//  console.log(confirmPassword);
 const user = new usersModel(
    {
        name:name,
        email:email,
        password:password,
        confirmPassword:confirmPassword,
    }
);
user.save();
res.redirect("/");
})


app.listen(3000,(req,res)=>{
    console.log("server running at port 3000");
})