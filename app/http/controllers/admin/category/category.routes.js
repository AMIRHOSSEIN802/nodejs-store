const router = require("express").Router();
const CategoryController = require("./category.controller");
// const { categoryValidation, updateValidation } = require("./category.validator");
// const { validationResultMiddleware } = require("../../../common/middlewares/validation.middleware");


router.get("/parents", CategoryController.findparents)
router.get("/", CategoryController.findAll)
router.post("/create", CategoryController.createCategory)
router.post("/child/:parentId", CategoryController.findchild)
router.post("/:id", CategoryController.findBiId)
router.patch("/update/:id", CategoryController.update)
router.delete("/:categoryId", CategoryController.remove)
module.exports = {
    CategoryRoutes: router
}