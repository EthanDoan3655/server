const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app= express()

app.use (cors());
app.use(express.json())


const db= mysql.createConnection({
    host:"eccom.ch6pcgmme6sz.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "admin",
    password:"password",
    database:"products"
})

db.connect((error)=>{
    if(error){
        throw error
    }
    console.log("database connection success")
})

app.get("/api/product",(req,res)=>{
    db.query (`SELECT*FROM products`,(error,result)=>{
        if(error){
            throw error
        }



        res.status(200).json(result) 
        
       
    })  ;
});






app.listen("5001")
