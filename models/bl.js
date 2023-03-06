var connection=require('../database/database');
function getId(Id){
    return new Promise((resolve,reject)=>{
        // if(Id){
        //     connection.query('select from empdata2 where Id=?',[Id],(err,row,col)=>{
        //         if(err){
        //          reject(500)
        //         }
        //             resolve(row)
        //              })
        // }
        connection.query('select * from empdata2',(err,row,col)=>{
            if(err){
             reject(500)
            }
                resolve(row)
                 })
    })
    
}

function addId(I,n){

    return new Promise((resolve,reject)=>{
connection.query('insert into empdata2(Id,name) values(?,?)',[I,n],
  function(err,res){
    if(err){
        reject(500)        
    }
    resolve(res)
  })
})
}

function updateId(n,I){
    return new Promise((resolve,reject)=>{
    connection.query('update empdata2 set name=? where Id=?',[n,I],
    function(err,res){
      if(err){
          reject(500)
      }
      resolve(res)
    })
    })
  }

  function deleteId(Id){
    return new Promise((resolve,reject)=>{
    connection.query('delete from empdata2 where Id=?',[Id],
    function(err,res){
      if(err){
          reject(500)
      }
      resolve(res);
    })
    })
  }
// getId();
// addId(1,'koti');
// updateId(1,"vinnu");
// deleteId(3);
module.exports={getId,addId,updateId,deleteId}
