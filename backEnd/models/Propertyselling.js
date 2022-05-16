const mongoose  = require("mongoose");

const SellingSchema= new mongoose.Schema({
    ownername:{
        type:String,
        required:[true,"Field can not be empty"],

    },
    location:{
        type:String,
        required:[true,"Field can not be empty"],
        unique:[true,"This property already exists."],
    },
    email:{
        type:String,
        required:[true,"Field can not be empty"],
    },
    contactnumber:{
        type:Number,
        required:[true,"Field can not be empty"],
    },
    description:{
        type:String,
        required:[true,"Field can not be empty"],
    },
    price:{
        type:Number,
        required:[true,"Field can not be empty"],
    },
    area:{
        type:Number,
        required:[true,"Field can not be empty"],
    },
    city:{
        type:String,
        required:[true,"Field can not be empty"],
    },
    state:{
        type:String,
        required:[true,"Field can not be empty"],
    },
    image:{
            public_id:String,
            url:String,
    
    }
});
module.exports=mongoose.model("Selling",SellingSchema);