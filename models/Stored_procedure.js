var db = require('../database/database1');

 function getData(req,res){
    db.query('select * from empsalary_detail',(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.json(data)
        }
    })

 }

 function getDataStored(req,res){
    db.query('select * from store_procedure',(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.json(data)
        }
    })

 }
 module.exports = {getData,getDataStored};