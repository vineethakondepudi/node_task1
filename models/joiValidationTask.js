var connection1 = require('../database/database1');
function getId(req,res){
    connection1.query('select * from vehicaname',(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(data)
        }
    })
}



function postId(req,res){
 
 connection1.query("insert into vehicaname(carname,car_price) values('"+req.body.carname+"','"+req.body.car_price+"')",(err,data)=>{
  if(err){
    console.log(err);
  }
  else{
    res.send(data)
  }
 })
}

module.exports = {getId, postId}