const mongoose  = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const UserSchema=new mongoose.Schema({
    name:{

        type:String,
        required:[true,"Please enter the Name."],
    },
    email:{
        type:String,
        required:[true,"Please enter the Email."],
        unique:[true,"Email already exists."],
    },
    password:{
        type:String,
        required:[true,"Please enter the Password."],
        minlength:[6,"Password must be at 6 characters."],
        select:false,
    },
});

UserSchema.pre("save", async function(next){
   
        if(this.isModified("password")){
            this.password=await bcrypt.hash(this.password,10);
        }
       next();
    
   
});
UserSchema.methods.matchPassword= async function(password){
    
        return await bcrypt.compare(password,this.password);    

    
};
UserSchema.methods.generateToken=function(){
    return jwt.sign({_id:this._id},process.env.JWT_SECRET);
}

module.exports=mongoose.model("User",UserSchema);