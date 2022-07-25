const router=require("express").Router()
const CryptoJS =require("crypto-js")
const User = require("../models/User")
const verify=require("../verifyToken")


//UPDATE
router.put("/:id",verify,async(req,res)=>{
    if(req.user.id==req.params.id || req.user.isAdmin){
        if(req.body.password){
            req.body.password=CryptoJS.AES.encrypt(req.body.password,process.env.SECRET_KEY)
        }
        
        try {
            const updateUser=await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
            res.status(200).json(updateUser)
        } catch (err) {
            res.status(500).json(err)
            
        }
    }else{
        res.status(403).json("u can delete only ur account")
    }
})

//DELETE
router.delete("/:id",verify,async(req,res)=>{
    if(req.user.id==req.params.id || req.user.isAdmin){
        
        
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted")
        } catch (err) {
            res.status(500).json(err)
            
        }
    }else{
        res.status(403).json("u can delete only ur act")
    }
})


//GET
router.get("/find/:id",async(req,res)=>{
        
        try {
            const user=await User.findById(req.params.id);
            const {password, ...info}=user._doc
            res.status(200).json(info)
        } catch (err) {
            res.status(500).json(err)
            
        }

})

//DELETE
router.get("/",verify,async(req,res)=>{
    const query=req.query.new;
    if(req.user.isAdmin){
        
        
        try {
            const users=query?await User.find():await User.find();
            res.status(200).json(users)
        } catch (err) {
            res.status(500).json(err)
            
        }
    }else{
        res.status(403).json("u can't access all account")
    }
})


//STATS

router.get("/stats",verify,async (req,res)=>{
    try {
        const data= await User.aggregate([
            {
                $project:{
                    month:{$month:"$createdAt"}
                }
            },{
                $group:{
                    _id:"$month",
                    total:{$sum:1}
                }
            }
        ])
        res.status(200).json(data)
        
    } catch (err) {
        res.status(500).json(err)
        
    }
})

module.exports=router;