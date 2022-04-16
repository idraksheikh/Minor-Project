const express=require("express");
const { register, login } = require("../controller/User");
const router=express.Router();

router.route("/user/register").post(register);
router.route("/user/login").post(login);

 module.exports=router;