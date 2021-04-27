const express = require('express');

const app =express();

PORT = 3000;
app.use(express.json());
//app.use(express.urlencoded());
app.post('/',(req,res)=>{
    if(!req.body.name){
        return res.status(400).send('Name is req');
    }
    return res.status(201).send(`${req.body.name}`);
});

app.put('/new/:id',(req,res)=>{
    res.json({
        id : req.params.id,
        name : req.body.name
    });
});
app.delete('/new/:id',(req,res)=>{
    res.json({
        msg:`delete ${req.params.id}`
    });
});

app.listen(PORT,()=>console.log('server started'));