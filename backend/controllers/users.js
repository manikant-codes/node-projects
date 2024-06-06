const { getUserObject } = require("../helpers/authHelper");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { logout } = require("./auth");
const Token = require("../models/Token");
const path = require("path");

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
    const { password, username } = req.body;

    const existingUser = await User.findById(req.params.id);
    if (!existingUser) {
      return res
        .status(404)
        .json({ success: false, msg: "No such user found!" });
    }

    const temp = {};

    if (username) {
      temp.username = username;
    }

    if (req.files && req.files.image) {
      if (req.files.image.size > 1000000) {
        return res.status(400).json({
          success: false,
          msg: "Please upload a file smaller than or equal to 1mb!",
        });
      }

      const uploadPath = path.join(
        __dirname,
        "../uploads",
        req.files.image.name
      );

      await req.files.image.mv(uploadPath);
      const imageURL = `http://localhost:5000/uploads/${req.files.image.name}`;
      temp.image = imageURL;
    }

    if (password) {
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(
        req.body.password?.toString(),
        salt
      );
      temp.password = hashedPassword;
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { ...temp },
      {
        new: true,
      }
    );

    if (password) {
      // Logout user.
      const token = req.headers.authorization.split(" ")[1];
      await Token.create({ token });
    }

    res.status(200).json({ success: true, msg: "User updated successfully!" });
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
