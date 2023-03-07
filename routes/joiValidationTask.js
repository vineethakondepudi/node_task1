var express = require('express');
var routes = express.Router();
var {createSchemaPost,createSchemaGet} = require('../validation/joyValidationTask1');
var model = require('../models/joiValidationTask')

routes.get('/allow',(req,res)=>{
    res.send("HIIIIIIIIIIIIIIII")
})

routes.get('/allowed',(req,res)=>{
    var result=createSchemaGet.validate(req.body)
    if(result.error)
    {
    
    return res.send(result.error.message)
    }
      
    model.getId(req,res, function(getId){

    })
})
routes.post('/allowed',(req,res,next)=>{
    var result=createSchemaPost.validate(req.body)
    if(result.error)
    {
    
    return res.send(result.error.message)
    }
    // else{
    //     res.send("Congratulations.................")
    // }
        
    model.postId(req,res,function(postId){
    
     })
       
  });
  module.exports = routes