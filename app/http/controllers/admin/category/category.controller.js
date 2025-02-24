const createHttpError = require("http-errors");
const { CategoryMessages } = require("../../../../../src/common/message.enum");
const {
  addCategorySchema,
} = require("../../../validators/admin/category.schema");
const Controller = require("../../user/controller");
const categoryService = require("./category.service");

class CategoryController extends Controller {
  #service;
  constructor() {
    super();
    this.#service = categoryService;
  }
  async createCategory(req, res, next) {
    try {
      await addCategorySchema.validateAsync(req.body);
      const { title, parent } = req.body;
      const result = await this.#service.createCategory({ title, parent });
      res.status(201).json({
        date: {
          status: 201,
          message: CategoryMessages.Created,
        },
      });
    } catch (error) {
      next(error);
    }
  }
  async findparents(req, res, next) {
    try {
      const result = await this.#service.findparents();
      res.status(200).json({
        data: {
          status: 200,
          result,
        },
      });
    } catch (error) {
      next(error);
    }
  }
  async findchild(req, res, next) {
    try {
      const parentId = req.params.parentId;
      const result = await this.#service.findchild(parentId);
      res.status(200).json({
        date: {
          status: 200,
          result,
        },
      });
    } catch (error) {
      next(error);
    }
  }
  async findAll(req, res, next) {
    try {
      const result = await this.#service.findAll();
      res.status(200).json({
        date: {
          status: 200,
          result,
        },
      });
    } catch (error) {
      next(error);
    }
  }
  async findBiId(req, res, next) {
    try {
      const id = req.params.id;
      const result = await this.#service.findBiId(id);
      res.status(200).json({
        status: 200,
        result,
      });
    } catch (error) {
      next(error);
    }
  }
  async update(req, res, next) {
    try {
      const id = req.params.id;
      const title = req.body.title;
      const result = await this.#service.update({ title, id });
      if (result.modifiedCount == 0)
        throw new createHttpError.InternalServerError("update failed");
      res.status(200).json({
        data: {
          status: 200,
          message: CategoryMessages.Update,
        },
      });
    } catch (error) {
        next(error)
    }
  }
  async remove(req, res, next) {
    try {
      const id = req.params.categoryId;
      const result = await this.#service.removeCategory(id);
      res.status(200).json({
        data: {
          status: 200,
          message: CategoryMessages.Delete,
        },
      });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new CategoryController();
