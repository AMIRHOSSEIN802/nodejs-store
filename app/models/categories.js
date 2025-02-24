const { Schema, model, Types } = require("mongoose");

const categorySchema = new Schema({
    title : {type : String , required : true},
    parent: {type:Types.ObjectId , ref: "category" , default: undefined}
},{
    toJSON: {
        virtuals : true
    },
    id : false
})
categorySchema.virtual("children", {
    ref: "category",
    localField: "_id",
    foreignField: "parent"
})
function autoPopulate(){
    this.populate([{path: "children" , select: {__v:0,id:0}}])
}
categorySchema.pre("find" , autoPopulate).pre("findOne", autoPopulate)

const CategoryModel = model("category" , categorySchema);
module.exports = CategoryModel
