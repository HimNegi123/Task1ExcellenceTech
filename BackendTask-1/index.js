const express=require("express");
require('dotenv').config(); 
const port = process.env.PORT || 3000;
const app=express(); 
const Router=require("./Routes/Authentication.js")
const dbConnection=require('./dbConnection.js');
const cors=require('cors');
dbConnection();

app.use(express.json());
app.use(cors());
app.use('/user',Router);

app.listen(port,(err)=>{
    if(!err) console.log(`Server is running in port 3000`); 
    else console.log(err); 
})