const mongoose = require('mongoose')
const uploadModule = new mongoose.Schema({
    title :{
        type:String,
        required:true
    },
    descreption : {
        type:String
    },
    moduleVideo : {
        type:String,
        required:true
    },
    createdAt : {
        type : Date,
        default: new Date()
    }
})
module.exports = mongoose.model('Module' , uploadModule);