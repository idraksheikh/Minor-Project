const express=require("express");
const { register, login, logout } = require("../controller/User");
const router=express.Router();

router.route("/user/register").post(register);
router.route("/user/login").post(login);
router.route("/user/logout").get(logout);


 module.exports=router;