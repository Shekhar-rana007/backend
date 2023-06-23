const dotenv = require("dotenv").config();
require("./config/dbconfig")
const cors = require("cors");
const drDetails = require("./database/Drdatabase/drSign-up")
const express = require("express");
const Port = process.env.PORT;
const routes =require("./Routes/userroutes");
const app = express();


//moddlewares  ----
app.use(cors());
app.use(express.json());

// ----router middlewares-----
app.use(drDetails);
app.use("/drapp/user", routes )


app.listen(Port, (req, res) => {
    console.log(`app is working on ${Port}`);
});

