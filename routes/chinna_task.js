var express = require('express');
var router = express.Router();
var chinna = require('../models/chinna_task');

router.get('/get',(req,res)=>{
    chinna.getId(req,res,function(getId){

    })
})
module.exports = router;