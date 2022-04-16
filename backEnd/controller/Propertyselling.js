const Selling=require("../models/Propertyselling")

exports.SellProperty=async(req,res)=>{
    try {
        const {ownerName,location,email,contactnumber,description,price,area,public_id,url}=req.body;
        // console.log(ownerName);
        const newSellProperty={
            ownerName:ownerName,
            location:location,
            email:email,
            contactnumber:contactnumber,
            description:description,
            price:price,
            area:area,
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