const mongoose = require("mongoose");

const subSubCategorySchema = new mongoose.Schema({
  category: { type: String, required: true },
});

const subCategorySchema = new mongoose.Schema({
  category: { type: String, required: true },
  subCategories: { type: [subSubCategorySchema] },
});

const categorySchema = new mongoose.Schema({
  category: { type: String, required: true },
  subCategories: { type: [subCategorySchema], required: true },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
