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
 * /user/send-otp:
 *  post:
 *      summary: login with OTP in this end-point
 *      tags:
 *          -   Auth
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/SendOTP'
 *              application/path:
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
 *              application/path:
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