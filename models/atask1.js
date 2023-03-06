var connection1 = require('../database/atask1');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');


function getMethod(req,res){
    connection1.query("select * from login where username='"+req.body.username+"'",(err,data)=>{
       
        if(data.length){
                res.send("data is already exist")
        }
        else {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
    return res.status(500).send({
    msg: err
    })
    }
    else {
    var query = "insert into login(username, password) values('" + req.body.username + "','" + hash + "')"
    connection1.query(query, (err, result) => {
    if (err) {
    res.send(err.message)
    }
    else {
    res.send(result)
    }
    })
    }
    
    })
    }
    })
}
       

function postMethod(req,res){
   

    connection1.query("select * from login where username='"+req.body.username+"'",async (err,results)=>{
        if (err) {
                throw err;
                return res.status(400).send({
                msg: err,
                });
                }
                if (!results.length) {
                return res.status(401).send({
                msg: "username or password is incorrect!",
                });
                }
                // check password
                bcrypt.compare(
                req.body.password,
                results[0]["password"],
                (bErr, bResult) => {
                // wrong password
                if (bErr) {
                throw bErr;
                return res.status(401).send({
                msg: "Email or password is incorrect!",
                });
                }
                if (bResult) {
                
                const user = {
                username: req.body.username,
                password: req.body.password,
                };
                
                const token = jwt.sign(
                user,
                'my_secret_key',
                { expiresIn: "60s" }
                );
                
                return res.status(200).send({
                msg: "Logged in!",
                token,
                user: results[0],
                });
                }
                return res.status(401).send({
                msg: "Username or password is incorrect!",
                });
                }
                );
    }
    )}

module.exports = {getMethod,postMethod}