const mongoose = require("mongoose");
const appointmodel= require("../models/appointmentmodel")


//register doctors:-
const appoinmentController = async(req,res)=>{
       try{
        const appointmentdetails= await appointmodel({...req.body})
       const result= appointmentdetails.save();
       res.status(200).send({success:true, message:req.body});
       } catch(error){
        res.status(201).send({
            message:error,
            success:false
        })
       }};

//getting appointment details:

const getAppointment= async(req,res)=>{

    try{
            const allAppointments= await appointmodel.find();
            res.status(200).send({success:true,allAppointments});

    }catch(err){
        res.status(200).send({success:false, message:err.message});
    }
}

module.exports= {appoinmentController,getAppointment }