const mongoose= require("mongoose");

const appointmentSchema= new mongoose.Schema({

patient:{type:String, required:[true, "patient name is required"]},
department:{type:String, required:[true, "please select youir department here"]},
message:{type:String, required:[true, "patient description is must"]},
time:{type:String, required:[true, "please select your time"],unique:[true,"this time doctor is already booked"]},
date:{type:String, required:[true, "please select any date"]},
phone:{type:String, required:[true, "provide your phone no "]},
email:{type:String, required:[true, "patient email is required"]},
doctor:{type:String, required:[true, "which doctor you want to go through"]}

});

const appointmentModel= mongoose.model("appointment",appointmentSchema);
module.exports= appointmentModel