const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();
const { getTasksStats } = require("../controllers/dashboard");

router.get("/stats", authMiddleware, getTasksStats);

module.exports = router;
