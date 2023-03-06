var express = require('express');
var router = express.Router();
var joi = require('../models/joivalidBl');
let { createUserSchema } = require('../validation/joi')

router.get('/api',(req,res)=>{
    joi.getId(req,res, function(getId){

    })
})

router.post('/api',(req,res,next)=>{
    var result=createUserSchema.validate(req.body)
if(result.error)
{

return res.send(result.error.message)
}
    joi.postId(req,res, function(postId)
    {
    
    })
    
})

router.put('/api',(req,res,next)=>{
    const{error,value}=createUserSchema.validate(req.body)
if(error)
{
console.log(error);
return res.send('invalid request...')
}
    
    joi.putId(req,res, function(putId)
    {
    
    })
    
})

router.delete('/api',(req,res,next)=>{
    joi.deleteId(req,res, function(deleteId)
    {
    
    })
    
})  

module.exports = router;