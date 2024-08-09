const express = require("express");
const { getUser, getAllUsers } = require("../controllers/usersControllers");
const {
  authMiddleware,
  isAdminMiddleware,
} = require("../middlewares/authMiddleware");
const usersRouter = express.Router();

usersRouter.get("/", authMiddleware, isAdminMiddleware, getAllUsers);
usersRouter.get("/getUser", authMiddleware, getUser);

module.exports = usersRouter;
