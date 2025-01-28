const { Schema, model } = require("mongoose");

const categorySchema = new Schema({
    title : {type : String , required : true}
})
const CategoryModel = model("category" , categorySchema);
module.exports = CategoryModel