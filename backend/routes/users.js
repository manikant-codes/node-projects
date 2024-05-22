const express = require("express");
const {
  getAllUsers,
  addUser,
  updateUser,
  deleteUser,
  getSingleUser,
} = require("../controllers/users");
const router = express.Router();

router.get("/", getAllUsers);

router.get("/:id", getSingleUser);

router.post("/", addUser);

router.patch("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;
