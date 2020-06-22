const express = require('express');
const app = express();
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const uploadRouter = require('./routes/uploadRouter')
const videosRouter = require('./routes/videosRouter')
app.use(express.static( "moduleVideo" ));
app.set('view engine' , 'ejs');
const PORT = process.env.PORT || 3000
mongoose.connect('mongodb://127.0.0.1/weTube' ,  { useNewUrlParser: true , useUnifiedTopology: true })
app.use(express.urlencoded({extended : false}))
app.use('/upload' , uploadRouter);
app.use('/videos' , videosRouter)
// app.use('/user' , userRouter)
app.get('/' , (req ,res)=>{
    res.render('index.ejs')
})








app.listen(PORT , ()=>{
    console.log('Server has started on port 3000')
})