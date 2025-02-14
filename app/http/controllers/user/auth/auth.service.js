const autoBind = require("auto-bind")
const { UserModel } = require("../../../../models/users")
const { RandomNumberGenerator, SignAccessToken } = require("../../../../utils/functions")
const { USER_ROLE, SECRET_KEY, EXPIRES_IN } = require("../../../../utils/constans")
const createHttpError = require("http-errors")
const jwt = require('jsonwebtoken');
const { authSchema } = require("../../../validators/user/auth.schema")
const { UserMessages } = require("../../../../../src/common/message.enum")

class authService {
    #UserModel
    constructor() {
        autoBind(this)
        this.#UserModel = UserModel
    }
    async sandOTP(mobile) {
        let user = await this.#UserModel.findOne({mobile})
        const code = RandomNumberGenerator();
        const now = Date.now();
        const otp = {
            code,
            expiresIn: now + (1000 * 60 * 2)
        }
        if(!user) {
             user = await this.#UserModel.create({
                mobile,
                code,
                Roles : USER_ROLE
            })
        }else {
            if(user.otp && user.otp?.expiresIn > now) throw new createHttpError.BadRequest(UserMessages.NotExpiresCode)
            user.otp = otp;
            await user.save()
        }
        return {
            message : "کد با موفقیت ارسال شد",
            code,
            mobile
        }
    }
    async checkOtp(mobile , code) {
        const now = (new Date().getTime())
        const user = await this.checkExistsUserByPhone(mobile)
        if (!user.otp) throw new createHttpError.NotFound(UserMessages.OtpNotFound)
        if(user?.otp?.expiresIn < Date.now()) throw new createHttpError.BadRequest(UserMessages.OtpNotFound)
        if(user?.otp?.code != code) throw new createHttpError.Unauthorized(UserMessages.InvalidCode)
        const accessToken = await SignAccessToken(user._id);
        // const refreshToken = await this.createRefreshToken({id: user._id})
        await user.save()
        return{
            message: "welcome to website",
            accessToken,
            // refreshToken
        }
    }
    async checkExistsUserByPhone(mobile) {
        const user = await this.#UserModel.findOne({ mobile })
        if (!user) throw createHttpError.NotFound(UserMessages.Notfound)
        return user
    }
    async createToken(payload) {
        const token = jwt.sign(payload, SECRET_KEY, {
            expiresIn: "1h"
        })
        await redisClient.setEx(`access_${payload.id}`,(60*60), token)
        return token;
    }
    async createRefreshToken(payload) {
        const token = await jwt.sign(payload, SECRET_KEY, {
            expiresIn: "1y"
        })
        await redisClient.setEx(`refresh_${payload.id}`, (365 * 24 * 60 * 60), token)
        return token;
    }
}
module.exports = new authService