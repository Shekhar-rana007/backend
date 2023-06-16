const mongoose= require("mongoose");

const drSchema= new mongoose.Schema({
    name:{type:String, required:[true, "please enter your name"], unique:true},
    department:{type:String, required:[true, "please enter ur department"]},
    age:{type:Number,required:[true, "please enter ur age"]},
    email:{type:String, required:[true, "please enter ur email"],unique:true}
});


module.exports = mongoose.model("doctor",drSchema);