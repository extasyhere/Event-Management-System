const mongoose=require("mongoose")
const nodemon = require("nodemon")

const userSchema=new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    phone_num:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    isAdmin:{type:Boolean,default:false}
})

module.exports =mongoose.model("User",userSchema);