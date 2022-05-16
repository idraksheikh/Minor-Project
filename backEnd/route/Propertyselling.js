const express=require("express");
const { SellProperty, getSellProperty,getSellPropertyByCity } = require("../controller/Propertyselling");
const router=express.Router();

router.route("/property/selling").post(SellProperty);
router.route("/property/properties").get(getSellProperty);
router.route("/property/propertiesincity").get(getSellPropertyByCity);
module.exports=router;