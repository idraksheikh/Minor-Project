const mongoose  = require("mongoose");

const SellingSchema=mongoose.Schema({
    ownerName:{
        type:String,
        required:[true,"Field can not be empty"],

    },
    location:{
        type:String,
        // required:[true,"Field can not be empty"],
    },
    email:{
        type:String,
        // required:[true,"Field can not be empty"],
    },
    contactnumber:{
        type:Number,
        // required:[true,"Field can not be empty"],
    },
    description:{
        type:String,
        // required:[true,"Field can not be empty"],
    },
    price:{
        type:Number,
        // required:[true,"Field can not be empty"],
    },
    area:{
        type:Number,
        // required:[true,"Field can not be empty"],
    },
    // image:{
    //     public_id:String,
    //     url:String,
    // }
});
module.exports=mongoose.model("Selling",SellingSchema);