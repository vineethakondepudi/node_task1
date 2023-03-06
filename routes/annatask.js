var task = require('../models/annatask');
var express = require('express');
var routes = express.Router();


routes.get('/get1',(req,res)=>{
    task.getData1(req,res,function(getData){

    })
});
routes.get('/get2',(req,res)=>{
    task.getData2(req,res,function(getData){

    })
})
module.exports = routes;