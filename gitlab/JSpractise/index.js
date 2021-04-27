const express = require('express');
//init express
const path = require('path');
const app =express();
//app.get(),app.post(),app.put(),app.delete()etc
//create your endpoints/route handlers

// app.get('/',function(req,res){
//     res.sendFile(path.join(__dirname,'index.html'));
//     //Fetch from database
//     //Load pages
//     //Return JSON
//     //Access to req & res
// });

//Static folder
app.use(express.static(path.join(__dirname,'public')));

//Listen on a port
app.listen(5000);