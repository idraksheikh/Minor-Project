const express=require("express");
const { SellProperty, getSellProperty } = require("../controller/Propertyselling");
const router=express.Router();

router.route("/property/selling").post(SellProperty);
router.route("/property/properties").get(getSellProperty);
module.exports=router;