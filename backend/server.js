import express from "express";
import data from "./data.js";

const app =  express();

// get function 
app.get('/', (req,res)=>{
    res.send("Server is ready");
});

// Products
app.get('/api/products',(req,res)=>{
    res.send(data.products);
})

// Listen to server
const port= process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Listening to port http://localhost:${port}`);
});