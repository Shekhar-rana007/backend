const express= require("express");
const router=new express.Router();
const drschema= require("../../config/drschema")



router.delete("/deletedoctor/:id",async(req,res)=>{

    try{
const result= await drschema.deleteOne({_id:req.params.id});
console.log(result);}
catch(err){
    console.log(err);
}

})

module.exports= router