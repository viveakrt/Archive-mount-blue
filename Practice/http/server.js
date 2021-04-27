const express = require('express');
const path = require('path');

const app =express();
const PORT =process.env.PORT || 3000;
//app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.post('/',(req,res)=>{
    //res.send(req.rawHeaders);
    //res.json({msg : 'hello'});
    //res.send(req.body.email);
    //res.send(req.header('Content-type'));
    if(!req.body.name){
        return res.status(400).send('Name is required');

    }

    res.status(201).send(`thank you ${req.body.name}`);
});

app.post('/login',(req,res)=>{
    if(!req.header('x-auth-token')){
        return res.status(400).send('No token');
    }
    if(req.header('x-auth-token') !== '123456'){
        return res.status(401).send('not authorized');
    }

    res.send('Logged in');
});

app.listen(PORT,()=>console.log('Server Started on 3000'));