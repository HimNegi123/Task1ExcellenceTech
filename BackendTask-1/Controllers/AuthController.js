const User=require("../Models/Schema");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const register=async function(req,res){
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
          name:name,
          email:email, 
          password: hashedPassword,
        });
    
     const user=  await newUser.save();
        const token = await jwt.sign({_id: user._id },process.env.JWT_SECRET);

        res.status(200).json({ message: 'User registered successfully', token });
      } catch (error) {
        res.status(400).json({ message: error.message });
      }   
}
const logIn=async function(req,res){
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        console.log(user); 
    
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        
        const isMatch = await bcrypt.compare(password, user.password);
     
        if (!isMatch) {
          return res.status(401).json({ message: 'Invalid credentials' });
        }
           
        const token = await jwt.sign({_id: user._id },process.env.JWT_SECRET);
      
    
        res.status(200).json({ message: 'Sign in successful', token });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }

}
module.exports={register,logIn};