const express= require("express");
const router= new express.Router();
const regdoctors=require("../../config/drschema")



router.get("/regdoctor",async (req,res)=>{
    try{
    let doctor= await regdoctors.find({});

   console.log(doctor);
   res.send(doctor);}
   catch(err){
    res.status(400).json({result:err.message})
   }
})

module.exports=router;