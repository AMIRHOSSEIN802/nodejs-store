const homeController = require("../../http/controllers/api/home.controller")
const router = require("express").Router();
/**
 * @swagger
 * tags:
 *  name: IndexPage
 *  description : Index page router and data
 */
/**
 * @swagger
 * /:
 *  get:
 *      summary : index of router
 *      tags : [IndexPage]
 *      description: get all need data for index page
 *      responses : 
 *          200 : 
 *               description : success
 *          404 :
 *               description : not Found
 */
router.get("/" , homeController.indexPage);
module.exports = {
    HomeRoutes : router
}