const Selling=require("../models/Propertyselling")
const ErrorHandler=require("../utils/ErrorHandler");
const ApiFeatures = require("../utils/apifeatures");
exports.SellProperty=async(req,res)=>{
    try {
        const {ownername,location,email,contactnumber,description,price,area,city,state,propertyImage}=req.body;
       
        const{url,public_id}=propertyImage;
        

        const newSellProperty={
            ownername:ownername,
            location:location,
            email:email,
            contactnumber:contactnumber,
            description:description,
            price:price,
            area:area,
            city:city,
            state:state,
            image:{
                public_id:public_id,                
                url:url
             }         
        };
        // {ownerName:ownername}

        const newProperty=await Selling.create(newSellProperty);
        
                res.status(201).json({
                    success:true,
                    property:newProperty,
                })

    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

exports.getSellProperty = async (req,res) =>{
try {

    const sellProperties = await Selling.find();

    if(!sellProperties){

    }

    res.status(200).json({success:true, sellProperties});

} catch (error) {
    res.status(500).json({
        success:false,
        message : error.message
    })
}

}

exports.getSellPropertyByCity = async (req,res,next) =>{
    try {
       
        const apiFeature = new ApiFeatures(Selling.find(), req.query)
        .search()
        let sellProperties = await apiFeature.query;
    
        if(sellProperties.length==0){
            
            return next(new ErrorHandler("no entries found for this city", 400)) 
        }
        else{
            res.status(200).json({success:true, sellProperties});
        }
        
    
    } catch (error) {
        res.status(500).json({
            success:false,
            message : error.message
        })
    }
    
    }