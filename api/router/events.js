const router=require("express").Router()
const Event = require("../models/Event")
const verify=require("../verifyToken")


//CREATE EVENT

router.post("/",verify,async(req,res)=>{
    if(req.body.isAdmin){
        const newEvent=new Event(req.body);
        try {
            const saveEvent=await newEvent.save()
            if (!saveEvent) {
                return res.status(404).json({ error: "No Profile Found" });
              }
              else {
                res.json(saveEvent);}
        } catch (err) {
            res.status(500).json(err)
        }
    }else{
        res.status(400).json("u r not allowed")
    }
})



//UPDATE EVENT

router.put("/:id",verify,async(req,res)=>{
    if(req.body.isAdmin){
        try {
            const updateEvent=await Event.findByIdAndUpdate(req.params.id,
                {$set:req.body},
                {new:true})
            res.status(200).json(updateEvent)
        } catch (err) {
            res.status(500).json(err)
        }
    }else{
        res.status(400).json("u r not allowed")
    }
})




//DELETE EVENT

router.delete("/:id",verify,async(req,res)=>{
    if(req.body.isAdmin){
        try {
            await Event.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted")
        } catch (err) {
            res.status(500).json(err)
        }
    }else{
        res.status(400).json("u r not allowed")
    }
})



//FIND EVENT

router.get("/:id",verify,async(req,res)=>{
        try {
            const getEvent=await Event.findById(req.params.id)
            res.status(200).json(getEvent)
        } catch (err) {
            res.status(500).json(err)
        }
})





//RANDOM EVENT

router.get("/random",verify,async(req,res)=>{
    try {
        const randomEvent=await Event.aggregate([
            {$sample:{size:1}}
        ])
        res.status(200).json(randomEvent)
    } catch (err) {
        res.status(500).json(err)
    }
})


//GET ALL

router.get("/",verify,async(req,res)=>{
    if(req.body.isAdmin){
        try {
            const allEvent=await Event.find();
            res.status(200).json(allEvent)
        } catch (err) {
            res.status(500).json(err)
        }
    }else{
        res.status(400).json("u r not allowed")
    }
})


module.exports=router;