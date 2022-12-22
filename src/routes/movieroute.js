const { Router } = require('express');
const express = require ('express');
const router = new express.Router();
const Movies = require ("../models/Movies") 
router.get('/movies',async (req,res)=>{
    try{
        const getMovies = await Movies.find({});
        res.status(200).send(getMovies)
    }catch(e){
        res.status(400).send(e)
    }
})
router.get('/movies/:id',async(req,res)=>{
    try{
        const _id = req.params.id;
        const getMovie = await Movies.findById({_id})
        res.status(200).send(getMovie)
    }catch(e){
        res.status(400).send(e)
    }
})
router.patch('/movies/:id',async(req,res)=>{
    try{
        const _id = req.params.id ;
        const addMovie  = await Movies.findByIdAndUpdate(_id,req.body,{
            new:true
        })
        res.status(201).send(addMovie)
    }catch(e){
        res.status(400).send(e)
    }
})
router.delete('/movies/:id',async(req,res)=>{
    try {
        const _id = req.params.id
        const deleteMovie = await Movies.findByIdAndDelete(_id)
        res.status(200).send(deleteMovie)
    } catch (e) {
        res.status(400).send(e)
    }
})
router.post('/movies',async(req,res)=>{
    try{
        const addingMovie = new Movies(req.body);
        console.log(req.body)
        const insertMovie = await addingMovie.save()
        res.status(200).send(insertMovie)
    }catch(e){
        res.send(404).send(e)
    }
})
module.exports=router

