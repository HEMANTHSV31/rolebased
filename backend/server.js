const bodyParser = require('body-parser')
const express = require("express");
const app= express();
const mysql=require('mysql2');
const cors =require('cors');
const dotenv =require ('dotenv');
dotenv.config();
app.use(express.json());
app.use(cors());

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"admin"

});
  db.connect((err) =>{
    if (err) {
            console.error("Database connection failed:", err);
            process.exit(1);
      }
      console.log("Database connected");
  });
  app.get("/", (req, res) => {
    db.query("SELECT * FROM master_users", (err, result) => {
        if (err) {
            console.error("Database error:", err);
            res.status(500).send("Failed to fetch users");
            return;
        }
        console.log(result);
        res.json(result);
    });
});

 
  app.listen(8080,()=>{
    console.log("server is running on port 8080");



  })

