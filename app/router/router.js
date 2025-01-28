const { HomeRoutes } = require("./api");
const { UserAurhRouter } = require("./user/auth");

const router = require("express").Router();
router.use("/user" , UserAurhRouter)
router.use("/" , HomeRoutes)
module.exports = {
    AllRoutes : router
}