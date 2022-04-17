const jwt = require("jsonwebtoken");
const User = require("../models/User");

//this is not used in the project

exports.isAuthenticated=async(req,res,next)=>{
    const {token}=req.cookies;
    if(!token){
       return res
        .status(400)
        .json({
            message:"login first."
        });
    }
    const decoded=await jwt.verify(token,process.env.JWT_SECRET);
    req.user=await User.findById(decoded._id);
};