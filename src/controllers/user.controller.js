const express = require("express");

const sendMail = require("../utils/send_mail")

const Users = require("../models/users.model");

const Admins = require("../models/admin.model");

const router = express.Router();

router.post("", async (req,res) =>{

    try{

       

        const users = await Users.create(req.body);

        const admins = await Admins.find().lean().exec();

        for(var i = 0; i < admins.length; i++){

            //for admins mails

            sendMail("ABCsystems@gmail.com",`${admins[i].email}`,
            `${req.body.first_name} ${req.body.last_name} has registered with us`,
            `Please welcome ${req.body.first_name} ${req.body.last_name}`,
            `Please welcome ${req.body.first_name} ${req.body.last_name}`)
            
        }
        //mail sending to new users

        sendMail("ABCsystems@gmail.com",`${req.body.email}`,
        `Welcome to ABC system ${req.body.first_name} ${req.body.last_name}`,
        `Hi ${req.body.first_name}, Please confirm your email address`,
        `Hi ${req.body.first_name}, Please confirm your email address`)

      
        return res.status(200).send({users})

    }
    catch(e){

        res.status(500).json({message: e.message, status:"Failed"});

    }

});


router.get("", async (req,res) =>{

    try{
        const page = +req.query.page || 1;
        const size = +req.query.size || 3;
        const skip = (page - 1) * size;


        const users = await Users.find().skip(skip).limit(size).lean().exec();

        const totalPages = Math.ceil(await Users.find().countDocuments() / size )

        return res.status(200).send({users,totalPages})

    }
    catch(e){

        res.status(500).json({message: e.message, status:"Failed"});

    }

});


module.exports = router;