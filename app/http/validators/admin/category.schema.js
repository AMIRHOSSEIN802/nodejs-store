const Joi = require("@hapi/joi");

const addCategorySchema = Joi.object({
    title : Joi.string().min(3).max(30).error(new Error("عنوان وارد شده صحیح نمی باشد")),
    parent: Joi.string().allow('').pattern(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i).allow("").error(new Error("موارد وارد شده صحیح نمی باشد"))
})
module.exports ={
    addCategorySchema
}