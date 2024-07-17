const express = require("express");
const categoriesRouter = express.Router();
const {
  authMiddleware,
  isAdminMiddleware,
} = require("../middlewares/authMiddleware");
const {
  getAllCategories,
  getSingleCategory,
  addCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoriesControllers");

categoriesRouter.get("/", getAllCategories);
categoriesRouter.get("/:id", getSingleCategory);
categoriesRouter.post("/", authMiddleware, isAdminMiddleware, addCategory);
categoriesRouter.patch(
  "/:id",
  authMiddleware,
  isAdminMiddleware,
  updateCategory
);
categoriesRouter.delete(
  "/:id",
  authMiddleware,
  isAdminMiddleware,
  deleteCategory
);

module.exports = categoriesRouter;
