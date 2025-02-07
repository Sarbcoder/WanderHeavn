const express=require("express");
const app=express();
const mongoose=require("mongoose");

app.get("/",(req,res)=>{
    res.send("hi i am root");



    //comment
})

app.listen(8080,()=>{
    console.log("listening port at 8080");
})
