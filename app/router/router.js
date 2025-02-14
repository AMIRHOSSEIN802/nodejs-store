const { UserAurhRouter } = require("../http/controllers/user/auth/auth.routes");
const { HomeRoutes } = require("./api");

const router = require("express").Router();
router.use("/user" , UserAurhRouter)
router.use("/" , HomeRoutes)
module.exports = {
    AllRoutes : router
}