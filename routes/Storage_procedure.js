var express= require('express');
var routes = express.Router();
var model = require('../models/Stored_procedure');
var db = require('../database/database1');

routes.get('/getData',(req,res)=>{
   model.getData(req,res,function(getData){

   })
});
routes.post('/insert-data', (req, res) => {
 
    db.query("CALL insert_data1('"+req.body.id_param+"','"+req.body.ADDRESS+"')", (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while inserting data.' });
      } else {
        console.log("Data inserted successfully.");
        res.status(200).json(results);
      }
    });
  });

  routes.get('/getDataStored',(req,res)=>{
    model.getDataStored(req,res,function(getDataStored){
 
    })
 });
module.exports = routes;