const cookieParser = require("cookie-parser");
const express=require("express");

const app=express();
const Property=require("./route/Propertyselling");
const User=require("./route/User");
if(process.env.NODE_ENV !=="production"){
    require("dotenv").config({path:"backEnd/config/config.env"});
}
app.use(express.json());
app.use(express.urlencoded({extended:'true'}));
app.use(cookieParser());
app.use("/api/v1",Property);
app.use("/api/v1",User);
module.exports=app;
