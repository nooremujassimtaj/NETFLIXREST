const express = require('express');
const Sr = require('../models/Series')
const router = new express.Router()
router.get('/series',async(req,res)=>{
    try{
        const findSeries = await Sr.find({});
        res.status(200).send(findSeries);
    }catch(e){
        res.status(404).send(e)
    }
})
router.get('/series/:id',async(req,res)=>{
    try {
        const _id = req.params.id 
        const findSerie = await  Sr.findById({_id})
        res.status(200).send(findSerie)
    } catch (e) {
        res.send(e)
    }
})
router.patch('/series/:id',async(req,res)=>{
    try {
        const _id = req.paramsas.id
        const updateSerie = await Sr.findByIdAndUpdate(_id,req.body,{
            new:true
        })
        res.status(200).send(updateSerie)
    } catch (e) {
        res.staus(404).send(e)
    }y
})
router.delete('/series/:id',async(req,res)=>{
    try {
        const _id = req.params.id ;
        const deleteSerie = await Sr.findByIdAndDelete(_id)
        res.status(200).send(deleteSerie)
    } catch (e) {
        res.staus(404).send(e)
    }
})
router.post('/series',async(req,res)=>{
    try{
        const AddSeries = new Sr(req.body);
        console.log(req.body)
        const InsertSeries = await AddSeries.save()
        res.status(200).send(InsertSeries)
    }catch(e){
        res.status(404).send(e)
    }
})
module.exports = router