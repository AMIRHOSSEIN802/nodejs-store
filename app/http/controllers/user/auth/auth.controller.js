const {
  authSchema,
} = require("../../../validators/user/auth.schema");
const Controller = require("../controller");
const authService = require("./auth.service");

class UserAuthController extends Controller {
    #service
    constructor() {
      super()
      this.#service = authService
    }
    async sandOTP(req , res , next) {
      try {
        const {mobile} = req.body
        await authSchema.validateAsync(req.body);
        const result = await this.#service.sandOTP(mobile)
        res.json(result)
      } catch (error) {
        next(error)
      }
    }
  async checkOTP(req, res, next) {
    try {
      const {mobile , code } = req.body
      const result = await this.#service.checkOtp(mobile , code)
      res.json(result)
    } catch (error) {
      next(error);
    }
  }

}

module.exports = {
  UserAuthController: new UserAuthController(),
};
