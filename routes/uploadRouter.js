const express = require('express')
const route = express.Router()
var Module = require('../models/uploadModule')
const multer = require('multer')
const fs = require('fs');

const storage = multer.diskStorage({
    destination: (req , file , cb)=>{
        cb(null ,'./moduleVideo/')

    },
    filename : (req , file , cb)=>{
        cb(null ,Date.now() + file.originalname)
    }
})
const videoFilter = (req , file , cb) =>{
    //store a file 
    if (file.mimetype == 'video/mp4' || file.mimetype == 'video/x-flv' || file.mimetype == 'video/x-msvideo' || file.mimetype == 'video/x-ms-wmv' )
    cb(null , true)
    //reject the file
    else {
        var err = new Error('File format is not acceptable')
        err.status = 403;
        cb(err , false)

    }
}
const upload = multer({storage : storage , fileFilter: videoFilter})
route.get('/' , (req , res)=>{
    res.render('upload.ejs')
})
route.post('/' , upload.single('moduleVideo') ,(req , res)=>{

    let video = Module.create({
        title : req.body.title,
        descreption : req.body.descreption,
        moduleVideo : req.file.filename
    })
    .then((video) => {
        res.redirect(`/videos/${video.id}`)
    
    })
    .catch(err =>{
        console.log(`upload.single error: ${err}`);
        return res.sendStatus(500);
    })

})

module.exports = route;