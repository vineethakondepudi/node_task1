var express = require('express');
var router = express.Router();
const app1 = express();
const app2 = express();
//Require the business logic
var sirTask3 = require('../models/sirTask3');
const unirest = require('unirest');


// Employee  Details Api
app1.get('/userdetails',(req,res)=>{
    sirTask3.getData(req,res,function(getData1){
        
    })
});   


// Employee  Details based id Api 
app1.get('/userdetails/:emp_id',(req,res)=>{
    sirTask3.getData1(req,res,function(getData1){
        
    })
});
// app1.listen(4000,()=>console.log("server running at port 4000"));



// Employee Bank Details Api
app2.get('/bankdetails/:emp_id',(req,res)=>{
    sirTask3.getData2(req,res,function(getData2){
        
    })
});
// app2.listen(5000,()=>console.log("server running at port 5000"))







//Combined Data Api
api1Url= ('http://localhost:4000/userdetails/:emp_id');
api2Url =('http://localhost:5000/bankdetails/:emp_id');

app2.get('/combinedData/:emp_id', (req, res) => {
    const empId1 = req.params.emp_id;
    const empId2 = req.params.emp_id;
    
    const request1 = unirest.get(api1Url.replace(':emp_id', empId1));
    const request2 = unirest.get(api2Url.replace(':emp_id', empId2));

    // Use Promise.all to wait for both requests to complete
    Promise.all([request1, request2])
      .then((responses) => {
        // Extract data from the response bodies
        const data1 = responses[0].body;
        const data2 = responses[1].body;
        
        // Combine the two sets of data into one response object
        const responseData =
        {
           data1:data1
           ,data2:data2
        }
  var a = Object.values(responseData)[0];
  var b= Object.values(responseData)[1];
  var result = {
    ...a,
    ...b
  }
        // Send the combined data as the response
        res.send(result);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send('Error getting data from APIs');
      });
  });


  module.exports = router;