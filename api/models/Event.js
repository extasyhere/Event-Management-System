const mongoose=require("mongoose")

const eventSchema=new mongoose.Schema({
    img:{type:String,required:true},
    showName:{type:String,required:true},
    timing:{type:String,required:true},
    venue:{type:String,required:true},
    artists:{type:String,required:true},
    desc:{type:String,required:true}
})

module.exports = mongoose.model("event",eventSchema )