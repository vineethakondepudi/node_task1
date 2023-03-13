// var express = require('express');
// var app = express();
// var port = 9090;
// const { Storage } = require("@google-cloud/storage");
// const Multer = require("multer");

// const multer = Multer({
//     storage: Multer.memoryStorage(),
//     limits: {
//       fileSize: 5 * 1024 * 1024, // No larger than 5mb, change as you need
//     },
//   });
// let projectId = "YOUR-PROJECTID"; // Get this from Google Cloud
// let keyFilename = "PATH-TO-YOUR-KEYFILE.json"; // Get this from Google Cloud -> Credentials -> Service Accounts
// const storage = new Storage({
//   projectId,
//   keyFilename,
// });
// const bucket = storage.bucket("YOUR-STORAGE-BUCKET"); // Get this from Google Cloud -> Storage

// // Streams file upload to Google Storage
// app.post("/upload", multer.single("imgfile"), (req, res) => {
//     console.log("Made it /upload");
//     try {
//       if (req.file) {
//         console.log("File found, trying to upload...");
//         const blob = bucket.file(req.file.originalname);
//         const blobStream = blob.createWriteStream();
  
//         blobStream.on("finish", () => {
//           res.status(200).send("Success");
//           console.log("Success");
//         });
//         blobStream.end(req.file.buffer);
//       } else throw "error with img";
//     } catch (error) {
//       res.status(500).send(error);
//     }
//   });
//  app.get('/',(req,res)=>{
//     res.sendFile(__dirname + "/index.html");
//  })
//  app.listen(port,()=>console.log(`Server started on port ${port}`))