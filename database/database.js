const mysql=require('mysql');
const connection=mysql.createConnection({
    host:"172.17.15.100",
    user:"itguser10",
    password:"miracle@10",
    database:"employedata"
})
connection.connect((err)=>
{
  if(!err)
  {
    console.log("database connected")
  }
  else{
    console.log(err)
  }
}) 
 
module.exports=connection;
