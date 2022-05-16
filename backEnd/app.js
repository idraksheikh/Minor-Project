const cookieParser = require("cookie-parser");
const express=require("express");
const fileupload=require("express-fileupload");
const app=express();
const Property=require("./route/Propertyselling");
const User=require("./route/User");
const bodyparser=require("body-parser");
const errorhandler = require('./middlewares/error');
if(process.env.NODE_ENV !=="production"){
    require("dotenv").config({path:"backEnd/config/config.env"});
}
app.use(fileupload());
app.use(express.json({
    limit:"50mb"
}));

app.use(bodyparser.urlencoded({extended:'true',limit:"50mb"}));
app.use(cookieParser());
app.use("/api/v1",Property);
app.use("/api/v1",User);
app.use(errorhandler)
module.exports=app;
