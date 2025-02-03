const { UserAuthController } = require("../../http/controllers/user/auth/auth.controller");

const router = require("express").Router();
/**
 * @swagger
 *  tags:
 *      name: User-Authentication
 *      description: user-auth section
 */
/**
 * @swagger
 *  /user/login/{mobile}:
 *      post:
 *          tags: [User-Authentication]
 *          summary : login user in userpanel with phone number
 *          description : opn time password(OTP) login
 *          parameters: 
 *          - name: mobile
 *            description: fa-IRI phonenumber
 *            required: true
 *            type: string
 *            in: path
 *          responses : 
 *              201:
 *                  description: Success
 *              400:
 *                  description: Bad Request
 *              401:
 *                  description: Unauthorization
 *              500:
 *                  description: Internal Server Error
 */


router.post("/login/:mobile" , UserAuthController.getOtp)
module.exports ={
    UserAurhRouter : router
}