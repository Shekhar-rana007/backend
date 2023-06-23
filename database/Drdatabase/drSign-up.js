const express= require("express");
const router= new express.Router();
const drDetail=require("../../models/drschema")

const drsignup=async (req,res)=>{
    const details= req.body;
    try{
    let doctor= new drDetail(details);
    let result= await doctor.save();
   res.send(result)}
   
   catch(err){
    res.send(err)
   }
}

const registeredDoc=async (req,res)=>{
    try{
    let doctor= await drDetail.find({});

   console.log(doctor);
   res.send(doctor);}
   catch(err){
    res.status(400).json({result:err.message})
   }
}

const deleteDoc=async(req,res)=>{
    try{
const result= await drDetail.deleteOne({_id:req.params.id});
console.log(result);}
catch(err){
    console.log(err);
}

}
//------------------signup doctors--api-------------------------

router.post("/drdata",drsignup);

//--------------------------no of doctors are registered ------------------
router.get("/regdoctor",registeredDoc)


// ---------------------------delete an unwanted doctor--------------------

router.delete("/deletedoctor/:id",deleteDoc)


module.exports=router;