require("dotenv").config();
const express = require("express");

const mongoose = require("mongoose");
const amazon = express();

amazon.use(express.json());

// importing data 
const data =require("./data/index");
const itemmodel = require("./data/itemschema");
const loginmodel = require("./data/loginschema");

// ---> importing routes
const routelogin = require("./API/login");

amazon.use("/login",routelogin);

const itemrouter = require("./API/item");
amazon.use("/item",itemrouter);

mongoose.connect(process.env.mon_url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => console.log("connection done"));


amazon.get("/",(req,res) => {

    return res.json({login:data})
})


// initializing Server 

amazon.listen(2000,() =>{
    console.log(" server is absolutely fine......")
})