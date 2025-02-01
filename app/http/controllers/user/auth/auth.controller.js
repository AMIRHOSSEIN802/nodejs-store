const createHttpError = require("http-errors");
const { authSchema } = require("../../../validators/user/auth.schema");
const { RandomNumberGenerator } = require("../../../../utils/functions");
const UserModel = require("../../../../models/users");
const { EXPIRES_IN, USER_ROLE } = require("../../../../utils/constans");
const Controller = require("../controller");
const { randomInt } = require("crypto");

class UserAuthController extends Controller {
  async getOtp(req, res, next) {
    try {
      await authSchema.validateAsync(req.body);
      const { mobile } = req.body;
      const code = RandomNumberGenerator()
      const result = await this.saveUser(mobile, code)
      if (!result) throw createError.Unauthorized("ورود شما انجام نشد")
      return res.status(HttpStatus.OK).send({
        data: {
          statusCode: HttpStatus.OK,
          data: {
            message: "کد اعتبار سنجی با موفقیت برای شما ارسال شد",
            code,
            mobile
          }
        }
      });
    } catch (error) {
      next(error);
    }
  }

  async saveUser(mobile, code) {
    const now = (new Date().getTime())
    let otp = {
      code,
      expiresIn: now  + 120000,
    }
    const user = await this.checkExistUser(mobile);
    if (user){
      console.log(user.otp, now);
      if (+user.otp.expiresIn > now) throw createError.Forbidden("کد اعتبار سنجی قبلی هنوز منقضی نشده است")
      return (await this.updateUser(mobile, { otp }))
    }
    return (await UserModel.create({
      mobile,
      otp,
      Role: USER_ROLE
    }))
  }
  async checkExistUser(mobile) {
    const user = await UserModel.findOne({ mobile });
    return user
  }
  async updateUser(mobile, objectData = {}) {
    Object.keys(objectData).forEach(key => {
      if (["", " ", 0, null, undefined, "0", NaN].includes(objectData[key])) delete objectData[key]
    })
    const updateResult = await UserModel.updateOne({ mobile }, { $set: objectData })
    return !!updateResult.modifiedCount
  }
}

module.exports = {
  UserAuthController: new UserAuthController(),
};
