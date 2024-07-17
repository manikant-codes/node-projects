const Category = require("../models/Category");
const { sendErrorResponse } = require("../utils/serverUtils");

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).send({ success: true, data: categories });
  } catch (error) {
    sendErrorResponse(res, error.message);
  }
};

const getSingleCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);
    res.status(200).send({ success: true, data: category });
  } catch (error) {
    sendErrorResponse(res, error.message);
  }
};

const addCategory = async (req, res) => {
  try {
    await Category.create(req.body);
    res.status(200).send({ success: true, msg: "Category created." });
  } catch (error) {
    sendErrorResponse(res, error.message);
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);
    if (!category) {
      sendErrorResponse(res, "No such category exists.", 404);
    }
    await Category.findByIdAndUpdate(id, req.body);
    res.status(200).send({ success: true, msg: "Category updated." });
  } catch (error) {
    sendErrorResponse(res, error.message);
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);
    if (!category) {
      sendErrorResponse(res, "No such category exists.", 404);
    }
    await Category.findByIdAndDelete(id);
    res.status(200).send({ success: true, msg: "Category deleted." });
  } catch (error) {
    sendErrorResponse(res, error.message);
  }
};

module.exports = {
  getAllCategories,
  getSingleCategory,
  addCategory,
  updateCategory,
  deleteCategory,
};
