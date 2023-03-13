var connection1= require('../database/database1');

function getData(req,res){
    connection1.query("select * from emp_detail ",(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
           res.send(data[0]);
        }
    })
}
function getData1(req,res){
    var id=[req.params.emp_id]
    connection1.query("select * from emp_detail where emp_id=?",id,(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
           res.send(data[0]);
        }
    })
}



function getData2(req,res){
    var id=[req.params.emp_id]
    connection1.query("select * from empsalary_detail where emp_id=?",id,(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
           res.send(data[0]);
        }
    })
}


module.exports = {getData,getData1,getData2};