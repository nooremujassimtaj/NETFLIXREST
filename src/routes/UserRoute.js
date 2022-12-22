const express = require('express')
const router = new express.Router()
const user = require('../models/user')
router.get('/users',async(req,res)=>{
    try{
        const getUsers = await user.find({});
        res.status(200).send(getUsers)

    }catch(e){
        res.status(404).send(e)
    }
})
router.get('/users/:id',async(req,res)=>{
    try {
        const _id = req.params.id 
        const findUser = await user.findById({_id})
        res.status(200).send(findUser)
    } catch (e) {
        req.status(400).send(e)        
    }
})
router.patch('/users/:id',async(req,res)=>{
    try {
        const _id = req.params.id 
        const updateUser = await user.findByIdAndUpdate(_id,req.body,{
            new : true
        })
        res.status(200).send(updateUser)
    } catch (e) {
        req.status(404).send(e)
    }
})
router.delete('/users/:id',async(req,res)=>{
    try {
        const _id = req.params.id ;
        const deleteUser = await user.findByIdAndDelete(_id)
        res.status(200).send(deleteUser)
    } catch (e) {
        req.status(404).send(e)
    }
})
router.post('/users',async(req,res)=>{
    try{
        const Addinguser = new user(req.body);
        const insertuser = await Addinguser.save()
        res.status(200).send(insertuser)

    }catch(e){
        res.status(404).send(e)
    }
})
module.exports=router
