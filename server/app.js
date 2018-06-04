//require all packages
const express = require('express');


//port server runs
const PORT = 3000;

//create instance of express
const app = express();


//routes
//when request made to localhost:3000, 
//server knows it has to use api routes line # 9
app.use('/api', api);
app.get('/', function(req, res){
    res.send("Hello from Server");
});

//creating server
app.listen(PORT, function(){
    console.log("Server running on localhost:" + PORT)
});
