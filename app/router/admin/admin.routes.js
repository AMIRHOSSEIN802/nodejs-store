const { CategoryRoutes } = require("../../http/controllers/admin/category/category.routes");


const router = require("express").Router();
router.use("/category" ,CategoryRoutes )
module.exports = {
    AdminRouter : router
}