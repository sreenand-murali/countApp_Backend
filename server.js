const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

const Day = require('./Models/dayModel');


app.use(cors());
app.use(express.json());

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_DB_CONNECT)
    .then(()=>{
        app.listen(PORT,()=>console.log("Server Running Succesfully"));
    })
    .catch((err)=>console.error("Error Occured While connecting with mongoose.\nError : "+err));




app.get('/day',(req,res)=>{
    Day.find()
    .then(d=>res.json(d))
    .catch((err)=>console.error("Error Occured While Finding from days.\nError : "+err));
});
app.post('/addday',(req,res)=>{
    const day = new Day({name:req.body.name});
    day.save()
    .then(d=>res.json(d))
    .catch((err)=>console.error("Error Occured While adding to days.\nError : "+err));
});
app.post('/deleteday',(req,res)=>{
    Day.findByIdAndDelete(req.body._id)
    .then(d=>res.json(d))
    .catch((err)=>console.error("Error Occured While Deleting to day.\nError : "+err));
});
app.post('/findday',(req,res)=>{
    Day.findById(req.body._id)
    .then(d=>res.json(d))
    .catch((err)=>console.error("Error Occured While Finding to day.\nError : "+err));
});

app.post('/updateroom',(req,res)=>{
    Day.findByIdAndUpdate(req.body._id,{"roomCount":req.body.roomCount,"totalCount":req.body.totalCount})
    .then(d=>res.json(d))
    .catch((err)=>console.error("Error Occured While Updating room.\nError : "+err));
});