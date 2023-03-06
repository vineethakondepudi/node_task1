var express = require('express');
var router = express.Router();
var db = require('../models/bl')

/* GET users listing. */
router.get('/api',(req,res)=>{
  db.getId()
  .then((d)=>res.send(d))
.catch((c)=>res.send(c))
});

router.post('/api',(req,res)=>{
  db.addId((req,res),function(data)
  {
    
  })
  // .then(()=>res.send(req.body))
  // .catch((c)=>res.send(c))
});


router.put('/api',(req,res)=>{
  db.updateId(req.body.name,req.body.Id)
  .then(()=>{res.send(req.body)})
  .catch((c)=>{res.send(c)})
});

router.delete('/api',(req,res)=>{
  db.deleteId(req.body.Id)
  .then(()=>{res.send("Deleted")})
  .catch((c)=>{res.send(c)})
});
module.exports = router;

