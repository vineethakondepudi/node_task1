// var connection1= require('../database/database1');

// function getData(req,res){
//     connection1.query("select * from emp_detail ",(err,data)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//            res.send(data);
//         }
//     })
// }
// function getData1(req,res){
//     var id=[req.params.emp_id]
//     connection1.query("select * from emp_detail where emp_id=?",id,(err,data)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//            res.send(data[0]);
//         }
//     })
// }



// function getData2(req,res){
//     var id=[req.params.emp_id]
//     connection1.query("select * from empsalary_detail where emp_id=?",id,(err,data)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//            res.send(data[0]);
//         }
//     })
// }


// module.exports = {getData,getData1,getData2};

// Require the database connection
var connection1= require('../database/database1');

//Write function for select query employee detail based on id
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


//Write function for select query employee salary detail based on id
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

//Exports the two methods
module.exports = {getData1,getData2};
