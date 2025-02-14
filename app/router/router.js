const { UserAurhRouter } = require("../http/controllers/user/auth/auth.routes");
const redisClient = require("../utils/init.redis");
const { HomeRoutes } = require("./api");
(async() => {
    await redisClient.set("key" , "value")
    const value = await redisClient.get("key")
    console.log(value);
})()
const router = require("express").Router();
router.use("/user" , UserAurhRouter)
router.use("/" , HomeRoutes)
module.exports = {
    AllRoutes : router
}