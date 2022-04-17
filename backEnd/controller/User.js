const User=require("../models/User")
exports.register = async (req,res)=>{
        try {
            const {name, email, password }=req.body;
            let user=await User.findOne({email});
            if(user){
                return res
                .status(400)
                .json({
                    success:false, message:"User already exists"
                });
            }
            user=await User.create({
                name,
                email,
                password
            });
            const token=await user.generateToken();
            res.cookie("accessToken", token, {
                maxAge: 1000 * 60 * 60 * 24 * 30,
                httpOnly: true,
              });
            res
            .status(200)
            .json({
                success:true,
                user,
                token
            }); 
        } catch (error) {
            res
            .status(500)
            .json({
                success:false,
                message:error.message
            });
        }
}
exports.login=async (req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await User.findOne({email}).select("+password");
    
    if(!user){
        res
        .status(400)
        .json({
            success:false,
            message:"User does not exist."
        });
    }
    const isMatch= await user.matchPassword(password);
    if(!isMatch){
        res
        .status(400)
        .json({
            success:false,
            message:"Incorrect password."
        });
    }
    const token=await user.generateToken();
    res.cookie("accessToken", token, {
        maxAge: 1000 * 60 * 60 * 24 * 30,
        httpOnly: true,
      });
    res
    .status(200)
    .json({
        success:true,
        token
    }); 
    } catch (error) {
        res
        .status(500)
        .json({
            success:false,
            message:error.message
        }); 
    }
   
}
exports.logout=async (req,res)=>{
    try {
        res
        .status(200)
        .cookie("token",null,{maxAge:0,httpOnly:true})
        .json({
            success:true,
            message:"Logout successfully"
        })
    } catch (error) {
     res
     .status(500)   
     .json({
         success:false,
         message:error.message
     })
    }
}
exports.resetpassword=async(req,res)=>{
    try {
        const user=User.findById(req.user._id);
        const {oldPassword,newPassword}=req.body;
        const isMatch=user.matchPassword(oldPassword);
        if(!isMatch){
            return res
            .status(400)
            .json({
                success:false,
                message:"Incorrect password"
            })
        }
    } catch (error) {
        res
        .status(500)
        .json({
            success:false,
            message:error.message
        })
    }
}