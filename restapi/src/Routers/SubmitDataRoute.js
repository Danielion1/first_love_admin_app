const express = require('express');
const res = require('express/lib/response');
const submitDataModel = require('../Model/submitDataModel');
const impartationDataModel = require('../Model/impartationDataModel');
const flowUnityDataModel = require('../Model/flowUnitDataModel')

const router =  express.Router();

//POST

router.post("/submitData", async(req,res)=>{
    console.log(req.body)
    const data = new submitDataModel(req.body)
    const result = await data.save()

    if(!result){
        res.json({
            status:"FAILED",
            message: "data not submitted successfully"
        })
    }
    else{
        res.json({
            status:"SUCCESS",
            message: "data submitted successfully",
            data:result
        })
    }
})

router.post("/impartationData", async(req,res)=>{
    console.log(req.body)
    const data = new impartationDataModel(req.body)
    const result = await data.save()

    if(!result){
        res.json({
            status:"FAILED",
            message: "data not submitted successfully"
        })
    }
    else{
        res.json({
            status:"SUCCESS",
            message: "data submitted successfully",
            data:result
        })
    }
})

//Submit Flow unity service Data
router.post("/flowUnityData", async(req,res)=>{
    console.log(req.body)
    const data = new flowUnityDataModel(req.body)
    const result = await data.save()

    if(!result){
        res.json({
            status:"FAILED",
            message: "data not submitted successfully"
        })
    }
    else{
        res.json({
            status:"SUCCESS",
            message: "data submitted successfully",
            data:result
        })
    }
})

//GET
router.get("/submitData", async(req,res)=>{
    try {
        const result = await submitDataModel.find()
        if(!result){
            res.json({
                status:"FAILED",
                message:"Not found record"
            })
        }
        else{
            res.json({
                status:"SUCCESS",
                message:"Records found",
                data:result
            })
        }
    } catch (e) {
        console.log(e)     
        res.send(e) 
    }
})

//get impartation data
router.get("/impartationData", async(req,res)=>{
    try {
        const result = await impartationDataModel.find()
        if(!result){
            res.json({
                status:"FAILED",
                message:"Not found record"
            })
        }
        else{
            res.json({
                status:"SUCCESS",
                message:"Records found",
                data:result
            })
        }
    } catch (e) {
        console.log(e)     
        res.send(e) 
    }
})

//get flow unity data
router.get("/flowUnityData", async(req,res)=>{
    try {
        const result = await flowUnityDataModel.find()
        if(!result){
            res.json({
                status:"FAILED",
                message:"Not found record"
            })
        }
        else{
            res.json({
                status:"SUCCESS",
                message:"Records found",
                data:result
            })
        }
    } catch (e) {
        console.log(e)     
        res.send(e) 
    }
})


//Single GET
router.get("/submitData/:id", async(req,res)=>{
    try {
        const pastor_id =req.params.id;
        const result = await submitDataModel.findById(pastor_id)
        if(!result){
            res.json({
                status:"FAILED",
                message:"Not found record"
            })
        }
        else{
            res.json({
                status:"SUCCESS",
                message:"Records found",
                data:result
            })
        }
    } catch (e) {
        console.log(e)  
        res.send(e)    
    }
})

//PUT
router.put("/submitData/:id", async(req,res)=>{
    try {
        const pastor_id =req.params.id;
        const result = await submitDataModel.findByIdAndUpdate(pastor_id, req.body,{new:true});
        if(!result){
            res.json({
                status:"FAILED",
                message:"Record not updated successfully .."
            })
        }
        else{
            res.json({
                status:"SUCCESS",
                message:"Records was successfully updated",
                data:result
            })
        }
    } catch (e) {
        console.log(e)  
        res.send(e)    
    }
})

//DELETE
router.delete("/submitData/:id", async(req,res)=>{
    try {
        const pastor_id =req.params.id;
        const result = await submitDataModel.findByIdAndDelete(pastor_id)
        if(!result){
            res.json({
                status:"FAILED",
                message:"Record not deleted...."
            })
        }
        else{
            res.json({
                status:"SUCCESS",
                message:"Records successfully deleted...",
                data:result
            })
        }
    } catch (e) {
        console.log(e)  
        res.send(e)    
    }

})
module.exports = router
