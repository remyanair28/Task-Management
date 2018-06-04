//import all packages
const express = require('express');

//connect to db
const mongoose = require('mongoose');
const db = 'url';	

mongoose.connect(db, err =>{
    if(err){
        console.log('Error!' + err)
    }else{
        console.log('Connected to mongodb')
    }
})

//APIs
loginRouter.get('/', (req, res) => {
    res.send('From API route');
});


//export the router to use in other files
module.exports = loginRouter;
