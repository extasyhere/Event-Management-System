const express=require("express")
const mongoose=require("mongoose")
const dotenv = require("dotenv")
const app=express()
const authRoute=require("./router/auth")
const usersRoute=require("./router/users")
const eventsRoute=require("./router/events.js")

dotenv.config({path:"./config.env"})

const DB=process.env.MONGO_URL

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology:true, 
}).then(()=>{
    console.log("connected to DB")
}).catch((err)=>console.log(`Error:-${err}`))


app.use(express.json())
app.use("/api/auth",authRoute)
app.use("/api/events",eventsRoute)
app.use("/api/users",usersRoute)


app.listen(8800,()=>{
    console.log("backend running")
});