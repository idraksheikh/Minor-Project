const express=require("express");

const app=express();
const Property=require("./route/Propertyselling");

if(process.env.NODE_ENV !=="production"){
    require("dotenv").config({path:"backEnd/config/config.env"});
}
// app.use("express.json");
app.use(express.urlencoded({extended:'true'}));

app.use("/api/v1",Property);

module.exports=app;
