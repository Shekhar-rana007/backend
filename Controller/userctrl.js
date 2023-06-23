const usermodel = require("../models/userModel");
const bcrypt = require("bcrypt");
const drmodel = require("../models/drschema");

const logincontroller = async (req, res) => {
    try {
        const user = await usermodel.findOne({ email: req.body.email })
        if (!user) {
            return res.status(200).send({ message: "inalid email or password", success: false });
        }
        const isMAtch = await bcrypt.compare(password, hash, (err, result) => {

        })

    } catch (err) {
        console.log(err)
    }

}
const registercontroller = async (req, res) => {
    try {
        const existinguser = await usermodel.findOne({ email: req.body.email })
        if (existinguser) {
            return res.status(200).send({ message: "user is already existing", success: false })
        }
        const password = req.body.password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        req.body.password = hashedPassword;
        const newuser = new usermodel(req.body);
        await newuser.save();
        res.status(201).send(newuser)
    } catch (err) {
        res.status(500).send({ success: false, message: `Register controller ${err.message}` })
    }
}


const applyDoctor = async (req, res) => {
    try {
        const applydoctor = await drmodel({...req.body,status:"pending"});
        const result= await applydoctor.save();
        res.status(200).send(`apply doctor successfully ${result}`);
    } catch (error) {
        res.status(200).send({ success: false, message: `applydoctor controller ${error.message}` })
    }
}
module.exports = { logincontroller, registercontroller,applyDoctor }