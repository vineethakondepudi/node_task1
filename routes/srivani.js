var express = require('express');
var routes = express.Router();
var app = express();
var model = require('../models/srivani')

app.get('/api',(req,res)=>{  
    model.getdata(req,res, function(getdata){

    })
});

app.post('/api',(req,res)=>{       
    model.postdata(req,res,function(postdata){
    
     })
       
  });

//   routes.put('/api/put',(req,res,next)=>{       
//     model.putdata(req,res,function(putdata){
    
//      })
       
//   });

//   routes.delete('/api/delete',(req,res,next)=>{       
//     model.deletedata(req,res,function(deletedata){
    
//      })
       
//   });
// app.listen(2000,'172.17.12.39',()=>console.log('listening on http://172.17.12.39:2000/api'))

  module.exports = routes