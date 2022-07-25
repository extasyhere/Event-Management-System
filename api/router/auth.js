const router=require("express").Router()
const jwt=require("jsonwebtoken")
const CryptoJS=require("crypto-js")
const User = require("../models/User")



//REGISTER
router.post("/register",async (req,res)=>{
    const newUser=new User({
        username:req.body.username,
        phone_num:req.body.phone_num,
        email:req.body.email,
        password:CryptoJS.AES.encrypt(req.body.password,process.env.SECRET_KEY), 
    })
    try{
        const user=await newUser.save();
        res.status(200).json(user)

    }catch(err){
        res.status(500).json(err)
    }
})


router.post("/login",async(req,res)=>{
    const user=await User.findOne({email:req.body.email})
    !user && res.status(401).json("wrong email")

    const decrypted=CryptoJS.AES.decrypt(user.password,process.env.SECRET_KEY)
    const originalPassword=decrypted.toString(CryptoJS.enc.Utf8)

    originalPassword!==req.body.password&&
    res.status(301).json("wrong password or email")

    const accesstoken =jwt.sign({id:user._id,isAdmin: user.isAdmin},process.env.SECRET_KEY,{expiresIn:"69d"})
    const{password, ...info}=user._doc;

    res.status(200).json({...info,accesstoken})
})


module.exports=router;