const express = require("express");

const mongoose = require("mongoose");


const Users = require("./models/users.model");

const usersController = require("./controllers/user.controller");

const Admins = require("./models/admin.model");

const adminsController = require("./controllers/admin.controller");


const connect = require("./configs/db")

const app = express();

app.use(express.json());



app.use("/users", usersController);

app.use("/admins", adminsController);


app.listen(3488, async function(){

    await connect();
    console.log("POrt 3488");
});

