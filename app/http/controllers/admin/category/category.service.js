const autoBind = require("auto-bind");
const CategoryModel = require("../../../../models/categories");
const createHttpError = require("http-errors");
const { CategoryMessages } = require("../../../../../src/common/message.enum");
class CategoryService {
  #model;
  constructor() {
    autoBind(this);
    this.#model = CategoryModel;
  }
  async createCategory(categoryDto) {
    const category = await this.#model.create(categoryDto);
    return category;
  }
  async findparents() {
    return this.#model.find({ parent: undefined }, { __v: 0 });
  }
  async findchild(parentId) {
    await this.checkExistsCategory(parentId);
    return this.#model.find({ parent: parentId });
  }
  async findAll() {
    return this.#model.find({ parent: undefined });
  }
  async findBiId(id) {
    await this.checkExistsCategory(id);
    return this.#model.findOne({ _id: id });
  }
  async update(updateDto) {
    const { id, title } = updateDto;
    await this.checkExistsCategory(id);
    console.log(updateDto);
    return this.#model.updateOne({ _id: id }, { title });
  }
  async removeCategory(id) {
    // const category = await this.checkExistsCategory(categoryId)
    // const children = await this.findchild(categoryId)
    // if(children.length > 0){
    //     children.forEach(async (child) => {
    //         await this.#model.deleteOne({_id: child._id})
    //     });
    // }
    const category = await this.checkExistsCategory(id);
    const deleteResult = await this.#model.deleteOne({ _id: category._id });
    if (deleteResult.deletedCount == 0)
      throw new createHttpError.InternalServerError(CategoryMessages.NotFound);
  }
  async checkExistsCategory(id) {
    const category = await this.#model.findById(id);
    if (!category)
      throw new createHttpError.NotFound(CategoryMessages.NotFound);
    return category;
  }
}
module.exports = new CategoryService();
