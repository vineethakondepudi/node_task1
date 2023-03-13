const mysql=require('mysql');
const connection1=mysql.createConnection({
    host:"172.17.15.100",
    user:"itguser10",
    password:"miracle@10",
    database:"vineetha"
})
connection1.connect((err)=>
{
  if(!err)
  {
    console.log("database1 connected")
  }
  else{
    console.log(err)
  }
}) 
 
module.exports=connection1;
