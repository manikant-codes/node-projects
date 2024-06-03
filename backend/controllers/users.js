const { getUserObject } = require("../helpers/authHelper");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { logout } = require("./auth");
const Token = require("../models/Token");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, msg: "Cannot get users!" });
  }
};

const getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ success: false, msg: "User not found!" });
    }
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, msg: "Cannot get user!" });
  }
};

const updateUser = async (req, res) => {
  try {
    console.log(req.body);
    // const existingUser = await User.findById(req.params.id);
    // if (!existingUser) {
    //   return res
    //     .status(404)
    //     .json({ success: false, msg: "No such user found!" });
    // }
    // const salt = bcrypt.genSaltSync(10);
    // const hashedPassword = bcrypt.hashSync(req.body.password?.toString(), salt);
    // const updatedUser = await User.findByIdAndUpdate(
    //   req.params.id,
    //   { ...req.body, password: hashedPassword },
    //   {
    //     new: true,
    //   }
    // );
    // const token = req.headers.authorization.split(" ")[1];
    // await Token.create({ token });
    // res.status(200).json({ success: true, msg: "User updated successfully!" });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ success: false, msg: "Failed to update user!" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const existingUser = await User.findById(req.params.id);

    if (!existingUser) {
      return res
        .status(404)
        .json({ success: false, msg: "No such user found!" });
    }

    await User.findByIdAndDelete(req.params.id);

    return res
      .status(200)
      .json({ success: true, msg: "User deleted successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, msg: "Failed to delete user!" });
  }
};

module.exports = {
  getAllUsers,
  getSingleUser,
  // addUser,
  updateUser,
  deleteUser,
};
