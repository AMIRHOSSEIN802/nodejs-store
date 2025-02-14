const { UserAuthController } = require("./auth.controller");


const router = require("express").Router();
router.post("/send-otp" ,UserAuthController.sandOTP)
router.post("/check-otp" , UserAuthController.checkOTP)
module.exports ={
    UserAurhRouter : router
}
