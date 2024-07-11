const express = require("express");
const { getUser } = require("../controllers/usersControllers");
const { authMiddleware } = require("../middlewares/authMiddleware");
const usersRouter = express.Router();

usersRouter.get("/getUser", authMiddleware, getUser);

module.exports = usersRouter;
