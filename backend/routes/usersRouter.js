const express = require("express");
const { getUser } = require("../controllers/usersControllers");
const { authMiddleware } = require("../middlewares/authMiddleware");
const userRouter = express.Router();

userRouter.get("/getUser", authMiddleware, getUser);

module.exports = userRouter;
