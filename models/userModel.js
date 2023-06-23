const mongoose= require("mongoose");

const userSchema= new mongoose.Schema({
    fname:{type:String, required:[true, "please enter your fname"]},
    lname:{type:String, required:[true, "please enter your lname"]},
    email:{type:String, required:[true, "please enter your email"], unique:true},
    password:{type:String, required:[true, "please enter your password"]},
});

const userModel= mongoose.model("users", userSchema)
module.exports= userModel