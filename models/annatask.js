var connection= require('../database/database1');
var fs = require('fs')


function getData1(req,res){
    fs.appendFileSync('pass.txt',"Class_1 Passed students:"+"\n")
    fs.appendFileSync('fail.txt',"Class_1 failed students:"+"\n")
    connection.query('select * from classone',(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(data)
            data.forEach((b)=>{
                if(b.Sub1>=35 && b.Sub2>=35 && b.Sub3>=35){
                    // console.log(b.studentname);
                    fs.appendFileSync('pass.txt',`${b.studentname}`+"\n",(err)=>{
                        if(err){
                            console.log(err);
                        }
                    })
                }
                
                else{                   
                        fs.appendFile('fail.txt',`${b.studentname}`+"\n",(err)=>{
                            if(err){
                                console.log(err);
                            }
                        })
                }
              })       
        }
    })
}




function getData2(req,res){
    fs.appendFile('pass.txt',"\n"+"Class_2 Passed students:"+"\n",(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("Inserted");
        }
    });
    fs.appendFile('fail.txt',"\n"+"Class_2 failed students:"+"\n",(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("Inserted");
        }
    })
    connection.query('select * from classtwo',(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
            result.forEach((b)=>{
                if(b.Sub1>=35 && b.Sub2>=35 && b.Sub3>=35){
                    // console.log(b.studentname);
                    fs.appendFileSync('pass.txt',`${b.studentname}`+"\n",(err)=>{
                        if(err){
                            console.log(err);
                        }
                    })
                }
                
                else{                    
                        fs.appendFile('fail.txt',`${b.studentname}`+"\n",(err)=>{
                            if(err){
                                console.log(err);
                            }
                        })
                }
              })
        }
    })
}

module.exports = {getData1,getData2};