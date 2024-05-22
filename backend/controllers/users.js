const User = require("../models/User");

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

const addUser = async (req, res) => {
  try {
    let objUser = { ...req.body };

    const numberOfUsers = await User.countDocuments();

    if (numberOfUsers === 0) {
      objUser.role = "admin";
    }
    const user = await User.create(objUser);
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const existingUser = await User.findById(req.params.id);

    if (!existingUser) {
      return res
        .status(404)
        .json({ success: false, msg: "No such user found!" });
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedUser });
  } catch (error) {
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
  addUser,
  updateUser,
  deleteUser,
};
