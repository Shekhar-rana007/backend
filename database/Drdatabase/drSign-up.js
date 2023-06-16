const express= require("express");
const router= new express.Router();
const drDetail=require("../../config/drschema")


//------------------signup doctors--api-------------------------

router.post("/drdata",async (req,res)=>{
    const details= req.body;
    try{
    let doctor= new drDetail(details);
    let result= await doctor.save();
   res.send(result);}
   
   catch(err){
    res.status(400).json({result:err.message})
   }
});
//--------------------------no of doctors are registered ------------------
router.get("/regdoctor",async (req,res)=>{
    try{
    let doctor= await drDetail.find({});

   console.log(doctor);
   res.send(doctor);}
   catch(err){
    res.status(400).json({result:err.message})
   }
})


// ---------------------------delete an unwanted doctor--------------------

router.delete("/deletedoctor/:id",async(req,res)=>{
    try{
const result= await drDetail.deleteOne({_id:req.params.id});
console.log(result);}
catch(err){
    console.log(err);
}

})


module.exports=router;