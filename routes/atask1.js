var task = require('../models/atask1');
var {createSchema} = require('../validation/task1')
var express = require('express');
var jwt = require('jsonwebtoken')
var routes = express.Router();

routes.get('/get',(req,res)=>{
    task.getMethod(req,res, function(getMethod){

    })
})

routes.post('/post',(req,res,next)=>{
  var result=createSchema.validate(req.body)
  if(result.error)
  {
  
  return res.send(result.error.message)
  }
      
  let userdata = task.getMethod(req,res,function(getMethod){
  
   })
     
});

routes.post('/token',(req,res)=>{
  task.postMethod(req,res, function(postMethod){

  })
})
routes.get('/token',taskToken,(req,res)=>{
  jwt.verify(req.token,'my_secret_key',(err,data)=>{
    if(err){
      res.sendStatus(403).json({
 message: 'Unauthorized Access'
 });
    }
    else{
      res.send(data)
    }
  })
})


function taskToken(req,res,next){
  const bearerHeader = req.headers["authorization"];
if(typeof bearerHeader !== 'undefined'){
const bearer = bearerHeader.split(" ");
const bearerToken = bearer[1];
req.token = bearerToken;
next();
}
else{
res.sendStatus(403);
}

}

 
module.exports = routes;