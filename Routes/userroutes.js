const express= require("express");
const {getAppointment,appoinmentController}= require("../Controller/appointment")
const router=new express.Router();
const { logincontroller, registercontroller, applyDoctor } = require("../Controller/userctrl");

// login user
router.post("/login", logincontroller);

// register user
router.post("/register",registercontroller)

router.post("/applydoctors",applyDoctor)

router.post("/appointmentDetails",appoinmentController)

//get appointmentDetails
router.get("/gettingappointments",getAppointment);

module.exports = router;




