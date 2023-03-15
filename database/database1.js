//Install the mysql module
const mysql=require('mysql');
//Creating the connection for storing the database details
const connection1=mysql.createConnection({
    host:"172.17.15.100",
    user:"itguser10",
    password:"miracle@10",
    database:"vineetha"
})
connection1.connect((err)=>
{
    //If no error occurs conncet the database

  if(!err)
  {
    console.log("database1 connected")
  }
  //If any error occur it will show the error
  else{
    console.log(err)
  }
}) 
//Exports the connection1
module.exports=connection1;

