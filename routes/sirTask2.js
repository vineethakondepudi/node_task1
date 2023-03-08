var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var chinna = require('../models/chinna_task');
var fs = require('fs')

let transporter = nodemailer.createTransport({
service: 'Gmail',
auth: {
user:'vineethakondepudi22@gmail.com',
pass: 'bpgnzdnzvpmvgkuo'
}
});

router.get('/vinnu',(req,res)=>{
    let mailOptions = {
        from: 'vineethakondepudi122@gmail.com', 
        to: 'vineethakondepudi22@gmail.com', 
        subject: ' vineetha kondepudi',
        text: '',
        html: '<p>Hai this is vineetha</p>',
        attachments: [{path:"k3.jpg"},{ path:"c:\\users\\vkondepudi\\node_task1\\sirTask2.json",content: 'hello world!' }]
        }
        transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
        console.log('Error occurs');
        }
        console.log('Email sent!!!');
        });
    res.send("vinnu.................")
})





module.exports = router;