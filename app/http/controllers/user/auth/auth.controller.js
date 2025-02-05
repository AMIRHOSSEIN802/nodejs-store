// const express = require("express");
const createHttpError = require("http-errors");
const {
  authSchema,
  checkOtpSchema,
} = require("../../../validators/user/auth.schema");
const {
  RandomNumberGenerator,
  SignAccessToken,
} = require("../../../../utils/functions");
const { UserModel } = require("../../../../models/users");
const { EXPIRES_IN, USER_ROLE } = require("../../../../utils/constans");
const Controller = require("../controller");
const { randomInt } = require("crypto");

class UserAuthController extends Controller {
  async getOtp(req, res, next) {
    try {
      console.log(req.body);
      await authSchema.validateAsync(req.body);
      const { mobile } = req.body;
      const code = RandomNumberGenerator();
      const result = await this.saveUser(mobile, code);
      if (!result) throw createHttpError.Unauthorized("ورود شما انجام نشد");
      return res.status(200).send({
        data: {
          statusCode: 200,
          message: "کد اعتبار سنجی با موفقیت برای شما ارسال شد",
          code,
          mobile,
        },
      });
    } catch (error) {
      next(createHttpError.BadRequest(error.message));
    }
  }
  async checkOTP(req, res, next) {
    try {
      console.log(req.body);
      
      await checkOtpSchema.validateAsync(req.body);
      const { mobile, code } = req.body;
      const user = await UserModel.findOne({ mobile });
      if (!user) throw createHttpError.NotFound("کاربر یافت نشد");
      if (user.otp.code != code)
        throw createHttpError.Unauthorized("کد وارد شده صحیح نمی باشید");
      const now = Date.now();
      if (+user.otp.expiresIn < now)
        throw createHttpError.Unauthorized("کد منقضی شده است");
      const accessToken = await SignAccessToken(user._id);
      return res.json({
        accessToken,
      });
    } catch (error) {
      next(error);
    }
  }

  async saveUser(mobile, code) {
    // const now = (new Date().getTime())
    let otp = {
      code,
      expiresIn: EXPIRES_IN,
    };
    const result = await this.checkExistUser(mobile);
    if (result) {
      console.log(user.otp, now);
      if (+user.otp.expiresIn > now)
        throw createHttpError.Forbidden(
          "کد اعتبار سنجی قبلی هنوز منقضی نشده است"
        );
      return await this.updateUser(mobile, { otp });
    }
    return !!(await UserModel.create({
      mobile,
      otp,
      Role: [USER_ROLE],
    }));
  }
  async checkExistUser(mobile) {
    const user = await UserModel.findOne({ mobile });
    return !!user;
  }
  async updateUser(mobile, objectData = {}) {
    Object.keys(objectData).forEach((key) => {
      if (["", " ", 0, null, undefined, "0", NaN].includes(objectData[key]))
        delete objectData[key];
    });
    const updateResult = await UserModel.updateOne(
      { mobile },
      { $set: objectData }
    );
    return !!updateResult.modifiedCount;
  }
}

module.exports = {
  UserAuthController: new UserAuthController(),
};
