const mongoose= require("mongoose");

const drSchema= new mongoose.Schema({
    userid:{type:String},
    fname:{type:String, required:[true, "please enter your name"], lowercase:true},
    lname:{type:String, required:[true, "Please enter your last name"]},
    phone:{type:String,required:[true, "please enter ur phone"]},
    website:{trpe:String},
    address:{type:String, required:[true,"please enter your address"]},
    specialization:{type:String, required:[true, "please enter your specializations"]},
    fees:{type:Number, required:[true,"fees is required"]},
    email:{type:String, required:[true, "please enter ur email"],unique:true},
    experience:{type:String, required:[true, "please enter your experience"]},
    open:{type: String, required:[true, "work timing is required"]},
    close:{type: String, required:[true, "work timing is required"]},
    status:{
        type:String,
        default:"pending"
    }
},{timestamps:true});


const drModel = mongoose.model("doctor",drSchema);
module.exports=drModel;