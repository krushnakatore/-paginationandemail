const mongoose = require("mongoose");

const adminsSchema = new mongoose.Schema(
    {
        first_name:{type:String, required:true},
        last_name:{type:String, required:true},
        email:{type:String, required:true}
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

module.exports = mongoose.model("admins", adminsSchema);