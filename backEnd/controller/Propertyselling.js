const Selling=require("../models/Propertyselling")
exports.SellProperty=async(req,res)=>{
    try {
        const {ownername}=req.body;
        const newSellProperty={
            
            ownerName:ownername,
            location:location,
            email:email,
            contactnumber:contactnumber,
            description:description,
            price:price,
            area:area,
            image:image           
        };
        const newProperty=await Selling.create(newSellProperty);
                res.status(201).json({
                    success:true,
                    property:newProperty,
                })

    } catch (error) {
        res.status(500).json({
            success:false
        })
    }
}