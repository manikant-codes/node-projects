const express = require("express");
const {
  getAllUsers,
  addUser,
  updateUser,
  deleteUser,
  getSingleUser,
} = require("../controllers/users");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/", authMiddleware, getAllUsers);

router.get("/:id", authMiddleware, getSingleUser);

// router.post("/", addUser);

router.patch("/:id", authMiddleware, updateUser);

router.delete("/:id", authMiddleware, deleteUser);

module.exports = router;
