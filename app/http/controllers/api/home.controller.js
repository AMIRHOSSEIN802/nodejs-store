const { authSchema } = require("../../validators/user/auth.schema");
const Controller = require("../user/controller");

module.exports = new class HomeController extends Controller {
    async indexPage(req, res, next) {
        try {
            return res.status(200).send("index Page store");
        } catch (error) {
            next(error)
        }
    }
}