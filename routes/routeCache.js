var express = require('express');
var router = express.Router();
var model = require('../models/cacheTask');
// var model = require('../models/joiValidationTask');





router.get('/items', async (req, res) => {
    var Item = model.getId(req,res, function(getId){

    })
    
  });



router.get('/allowed',async(req,res)=>{
  var Item = model.getId(req,res, function(getId){

    })
});


var express=require('express');
var cacheService = require("express-api-cache");
var cache = cacheService.cache;
var app=express();
app.get('/getdata', cache("10 minutes"),(req,res)=>
{
model.getdata(req,res,()=>
{

})
})
app.listen(8050,()=>console.log("Server running at port 8050"))

module.exports = router;