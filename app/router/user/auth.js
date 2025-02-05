const { UserAuthController } = require("../../http/controllers/user/auth/auth.controller");

const router = require("express").Router();
/**
 * @swagger
 * tags:
 *  name: Auth
 *  description: Authentication Api routs 
 */
/**
 * @swagger
 *  components:
 *      schemas:
 *          SendOTP:
 *              type: object
 *              required:
 *                  -   mobile
 *              properties:
 *                  mobile:
 *                      type: string
 *                      default: ''
 *          CheckOTP:
 *              type: object
 *              required:
 *                  -   mobile
 *                  -   code
 *              properties:
 *                  mobile:
 *                      type: string
 *                      default: ""
 *                  code:
 *                      type: string
 *                      default: ""
 */
/**
 * @swagger
 * /user/login/{mobile}:
 *  post:
 *      summary: login with OTP in this end-point
 *      tags:
 *          -   Auth
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/SendOTP'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/SendOTP'
 *      responses:
 *          200:
 *              description: success
 */
/**
 * @swagger
 * /user/check-otp:
 *  post:
 *      summary: this api for check user otp code.
 *      tags:
 *          -   Auth
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/CheckOTP'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/CheckOTP'
 *      responses:
 *          200:
 *              description: otp checked successfully
 */
/**
 * @swagger
 * /auth/refresh-token/{refreshToken}:
 *  put:
 *      summary: this request refresh all tokens.
 *      tags:
 *          -   Auth
 *      parameters:
 *          -   in: path
 *              name: refreshToken
 *              required: true
 *      responses:
 *          200:
 *              description: otp checked successfully
 */
router.post("/check-otp" , UserAuthController.checkOTP)
router.post("/login/:mobile" , UserAuthController.getOtp)
module.exports ={
    UserAurhRouter : router
}