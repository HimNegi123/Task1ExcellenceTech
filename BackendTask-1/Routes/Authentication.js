const express=require("express"); 
const {register,logIn}=require("../Controllers/AuthController");
const route=express.Router(); 

route.post('/register',register);
route.post('/logIn',logIn);


module.exports=route; 