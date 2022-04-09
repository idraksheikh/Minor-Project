const mongoose  = require("mongoose");

const UserSchema=mongoose.Schema({
    name:{

        type:String,
        required:[true,"Please enter the Name."],
    },
    email:{
        type:String,
        required:[true,"Please enter the Email."],
        unique:[true,"Email already exists."],
    },
    email:{
        type:String,
        required:[true,"Please enter the Password."],
        minlength:[6,"Password must be at 6 characters."],
        select:false,
    },
});
module.exports=mongoose.model("User",UserSchema);