const express=require("express");
const { SellProperty } = require("../controller/Propertyselling");
const router=express.Router();

router.route("/property/selling").post(SellProperty);
module.exports=router;