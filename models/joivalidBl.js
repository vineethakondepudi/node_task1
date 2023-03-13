var connection1 = require('../database/database1')


function getId(req,res){
    connection1.query('select * from emp2',(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(data)
        }
    })
}



function postId(req,res){
 console.log(req.body);
 connection1.query("insert into emp2(Firstname,Lastname,Email,Mobile_num) values('"+req.body.Firstname+"','"+req.body.Lastname+"','"+req.body.Email+"','"+req.body.Mobile_num+"')",(err,data)=>{
  if(err){
    console.log(err);
  }
  else{
    res.send(data)
  }
 })
}


function putId(req,res){
    connection1.query("update emp2 set Firstname='"+req.body.Firstname+"',Lastname='"+req.body.Lastname+"',Email='"+req.body.Email+"' where Mobile_num='"+req.body.Mobile_num+"'",(err,data)=>{
        if(err){
          console.log(err);
        }
        else{
          res.send(data)
        }
       })

}


function deleteId(req,res){
    connection1.query("delete from emp2 where Firstname='"+req.body.Firstname+"'",(err,data)=>{
        if(err){
          console.log(err);
        }
        else{
          res.send(data)
        }
       })
}

module.exports = {postId,getId,putId,deleteId}