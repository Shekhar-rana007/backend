const dotenv= require("dotenv").config();
require("./config/dbconfig")
const cors= require("cors");
// const drrouter= require("./database/Drdatabase/Registereddoctors")
const drDetails= require("./database/Drdatabase/drSign-up")
// const deletedDoctor= require("./database/Drdatabase/deletedoctor")
const express= require("express");
const Port= process.env.PORT;
const app= express();

//moddlewares  ----
app.use(cors());
app.use(express.json());


// ----router middlewares-----
// app.use(drrouter)
app.use(drDetails);
// app.use(deletedDoctor);



app.listen(Port,(req,res)=>{
    console.log(`app is working on ${Port}`);
})