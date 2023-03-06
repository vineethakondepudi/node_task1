var data=[{"id":1,"name":"Vandanarani Kottapalli","age":22,"language":["JavaScript","Angular","Node.js"]},
{"id":2,"name":"Hema Marada","age":22,"language":["JavaScript","Angular","Node.js"]},
{"id":3,"name":"Vineetha Kondepudi","age":22,"language":["JavaScript","Angular","Html"]},
{"id":4,"name":"Barnbas Telagareddy","age":22,"language":["SQL","Angular","Node.js"]},
{"id":5,"name":"Chinna Anaparthi","age":22,"language":["JavaScript","Angular","Node.js"]}]


var express = require('express');
var router = express.Router();
router.get('/qqq',(req,res)=>{
    res.send(`Hello vinnu`)
 });
 router.get('/api',(req,res)=>{
    res.send(data);
 });

 router.post('/api',(req,res)=>{
   
    console.log(req.body);
    data.push(req.body);
    res.sendStatus(201)
});

router.delete('/api/:id',(req,res)=>{
    var d=data.find(c=>c.id===req.params.id);
    const index=data.indexOf(d);
    data.splice(index,1);
    res.send(d);
  });
  
  router.put('/api/data/:id',(req, res)=>
{
var d=data.find(c=>c.id===parseInt(req.params.id))
d.language = req.body.language;
d.name=req.body.name;
res.send(d);

});
module.exports = router;