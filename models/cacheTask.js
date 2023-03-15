
var connection1 = require('../database/database1');

function getdata(req,res) {
    connection1.query('select * from vehicaname',(err,data)=>{
        if(err){
            console.log(err);
        }

    // middleware function
   else {
      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit);
   
      // calculating the starting and ending index
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
   
      const results = {};
      if (endIndex < data.length) {
        results.Next = {
          page: page + 1,
          limit: limit
        };
      }
   
      if (startIndex > 0) {
        results.previous = {
          page: page - 1,
          limit: limit
        };
      }
   
      results.Results = data.slice(startIndex, endIndex);
   
      res.json(results);
      
    };
      })
}

module.exports={getdata};


// // Require the database connection
// var connection1 = require('../database/database1');
// //Write a funtion for select query 
// function getpagidata(req,res){
//     connection1.query('select * from vehicaname',(err,data)=>{
//         //If any error occur print the error
//         if(err){
//             console.log(err);
//         }
// //Else print the data and apply the pagination
//         else{
//  // Use the req.query object and manually transform the strings into integers using parseInt()1394
// const page=parseInt(req.query.page)
// const limit=parseInt(req.query.limit)
// const startIndex=(page -1) * limit
// const endIndex = page * limit
// //Assign the result variable
// const result = data.slice(startIndex,endIndex)
// res.json(result);
//         }
//     })
// }
// //Export the getId method
// module.exports={getpagidata};