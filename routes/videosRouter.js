const express = require('express')
const route = express.Router()
const Module = require('../models/uploadModule')

route.get('/:id' , (req , res)=>{
    Module.findById(req.params.id)
    .then((module)=>{
        res.render('videoPage' , {module : module })
    })
    .catch(err => {throw err})
});
route.delete('/' , (req , res)=>{
    Module.remove({})
    .then((inf)=>{
        console.log(inf);
        
    })
    .catch(err => {throw err})
});
module.exports = route;