const { Schema, model } = require("mongoose");

const UserSchema = new Schema ({
    first_name : {type : String},
    last_name : {type : String},
    username : {type : String ,lowercase : true },
    mobile : {type : String, required: true},
    email : {type : String , lowercase : true},
    password : {type : String},
    otp : {type : Object , default : {
        code : 0,
        expiresIn :0
    }},
    bills : {type : [] , default : []},
    discount : {type : Number , default : 0},
    birthday : {type : String},
    Roles : {type : [String] , default : ["USER"]}
});
const UserModel = model("User" , UserSchema);
module.exports = UserModel
