var connection1 = require('../database/database1');



function getdata(req,res){
    connection1.query('select * from srivani',(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(data)
        }
    })
}



function postdata(req,res){
    // console.log(req.body);
 connection1.query("insert into srivani(id, title, author, cost) values('"+req.body.id+"','"+req.body.title+"','"+req.body.author+"','"+req.body.cost+"')",(err,data)=>{
  if(err){
    console.log(err);
  }
  else{
    console.log("hiiii");
    res.send(data)
  }
 })
}


// function putdata(req,res){
//     connection1.query("update srivani set title='"+req.body.title+"',author='"+req.body.author+"',cost='"+req.body.cost+"' where id='"+req.body.id+"'",(err,data)=>{
//         if(err){
//           console.log(err);
//         }
//         else{
//           res.send(data)
//         }
//        })

// }


// function deletedata(req,res){
//     connection1.query("delete from srivani where id='"+req.body.id+"'",(err,data)=>{
//         if(err){
//           console.log(err);
//         }
//         else{
//           res.send(data)
//         }
//        })
// }

module.exports = {getdata,postdata}