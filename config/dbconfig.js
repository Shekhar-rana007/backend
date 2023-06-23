const mongoose= require("mongoose");
const dbconnection=async()=>{
   try{
    mongoose.connect(process.env.URL);
    console.log("connection established" +" "+ process.env.URL);
   }catch(err){
    console.log(err)
   }
}
dbconnection()