
// var connection1 = require('../database/database1');

// function getdata(req,res) {
//     connection1.query('select * from cache_pagi',(err,data)=>{
//         if(err){
//             console.log(err);
//         }

//     // middleware function
//    else {
//       const page = parseInt(req.query.page);
//       const limit = parseInt(req.query.limit);
   

//       const startIndex = (page - 1) * limit;
//       const endIndex = page * limit;
   // //Assign the result variable
// // const result = data.slice(startIndex,endIndex)
// // res.json(result);


// module.exports={getdata};





// // Require the database connection
// var connection1 = require('../database/database1');
// //Write a funtion for select query 
// function getdata(req,res){
//     connection1.query('select * from cache_pagi',(err,data)=>{
//         //If any error occur print the error
//         if(err){
//             console.log(err);
//         }
// //Else print the data and apply the pagination
//         else{
//  // Use the req.query object and manually transform the strings into integers using parseInt()1394
// const offset=parseInt(req.query.offset)
// const limit=parseInt(req.query.limit)
// const startIndex=(offset -1) * limit
// const endIndex = offset * limit
// //Assign the result variable
// // const result = data.slice(startIndex,endIndex)
// // res.json(result);
// var a=[];

// for(var i=startIndex;i<endIndex&&i<data.length;i++){
//    res.json(data[i]);
// // a.push(data[i])
// }
// // res.send(a);
//         }
//     })
// }
// //Export the getId method
// module.exports={getdata};






// Require the database connection
var connection1 = require('../database/database1');
//Write a funtion for select query 
function getdata(req,res){
    connection1.query('select * from cache_pagi',(err,data)=>{
        //If any error occur print the error
        if(err){
            console.log(err);
        }
//Else print the data and apply the pagination
        else{
 // Use the req.query object and manually transform the strings into integers using parseInt()1394
const offset=parseInt(req.query.offset)
const limit=parseInt(req.query.limit)
// const startIndex=(offset -1) * limit
// const endIndex = offset * limit
  var a=[];
  var b=[];
  for (let i = offset; i <= limit ; i++) {
    a.push(data[i])
    }
    for (let i = offset; i <= data.length ; i++) {
        b.push(data[i])
        }
    if(limit<=data.length)
    {
    res.json(a)
    }
    else{
       var d = b.filter((c)=>{
          return c!=null;
        })
    res.json(d)
    }
}
    
    })
}
//Export the getId method
module.exports={getdata};