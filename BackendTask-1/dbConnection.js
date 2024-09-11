const mongoose=require("mongoose")
function dbConnection(){
    mongoose.connect('mongodb+srv://hnegi8984:himayu098+@cluster0.kbrng.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('MongoDB connected!'))
    .catch((err) => console.error('MongoDB connection error:', err));
}

module.exports=dbConnection; 