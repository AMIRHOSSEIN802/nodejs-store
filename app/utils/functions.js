const { UserModel } = require("../models/users")
const JWt = require("jsonwebtoken")
const createHttpError = require("http-errors")
const { SECRET_KEY } = require("./constans")

function RandomNumberGenerator(){
    return Math.floor((Math.random() * 90000) + 10000)
}
function SignAccessToken(userId){
    return new Promise(async (resolve , rejects) => {
        const user = await UserModel.findById(userId)
        const payload = {
            moblie : user.mobile,
            userID : user._id
        };
        const options = {
            expiresIn : "1h"
        };
        JWt.sign(payload , SECRET_KEY , options , (err, token) => {
            if(err) rejects(createHttpError.InternalServerError("خطای سرور"));
            resolve(token)
        })
    })
}
module.exports = {
    RandomNumberGenerator,
    SignAccessToken
}