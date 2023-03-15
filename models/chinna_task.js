var connection1 = require('../database/database1');
var fs = require('fs');
var PDFDocument = require('pdfkit');
const doc = new PDFDocument();
doc.pipe(fs.createWriteStream('chinna.pdf'));
function getId(req,res){
   connection1.query('SELECT * FROM chinna_task LIMIT 10 OFFSET 0;',(err,data)=>{
   if(err){
    console.log(err);
   }
   else{
    res.send(data);
    
doc
  .fillColor('blue')
  .fontSize(27)
  .text(JSON.stringify(data), 100, 100);
  

doc.end();
   }
   })
}

module.exports = {getId}