const { Schema, Types, model } = require("mongoose");

const productsSchema = new Schema({
    title : {type : String , required : true},
    short_desc : {type : String , required : true},
    total_desc : {type : String , required : true},
    image : {type : [String] , default: []},
    tags : {type : [String], required:true},
    category : {type : Types.ObjectId , required : true},
    comments : {type : [] , default: []},
    like : {type : [Types.ObjectId], default : []},
    deslike : {type : [Types.ObjectId] , default : []},
    bookmark : {type : [Types.ObjectId], default : []},
    price : {type : Number , default : 0},
    deiscount : {type : Number , default : 0},
    count : {type: String},
    type : {type : String , required : true},
    time : {type : String},
    format : {type : String},
    teacher : {type : Types.ObjectId , required: true},
    feture : {type : Object , default : {
        length : "",
        height : "",
        width : "",
        colors : [],
        model: [],
        madein : ""
    }}
});
const ProductModel =  model("product" , productsSchema);
module.exports = ProductModel