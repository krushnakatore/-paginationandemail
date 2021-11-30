const express = require("express");

//const sendMail = require("../utils/send_mail")

const Admins = require("../models/admin.model");



const router = express.Router();

router.post("", async (req,res) =>{

    try{

       

        const admins = await Admins.create(req.body);

      
        return res.status(200).send({admins})

    }
    catch(e){

        res.status(500).json({message: e.message, status:"Failed"});

    }

});


router.get("", async (req,res) =>{

    try{
       

        const admins = await Admins.find().lean().exec();

      

        return res.status(200).send({admins})

    }
    catch(e){

        res.status(500).json({message: e.message, status:"Failed"});

    }

});


module.exports = router;