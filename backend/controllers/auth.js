const User = require("../models/User");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    let objUser = { ...req.body };

    const numberOfUsers = await User.countDocuments();

    if (numberOfUsers === 0) {
      objUser.role = "admin";
    }

    const user = await User.create(objUser);

    const token = jwt.sign({ userId: user._id }, "secret", {
      expiresIn: "24h",
    });

    res.status(200).json({
      success: true,
      data: { userId: user._id, username: user.username, email: user.email },
      token,
    });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email: email });

    if (!existingUser) {
      return res
        .status(404)
        .json({ success: false, msg: "No such email exists!" });
    }

    const isPasswordCorrect = existingUser.password === password.toString();

    if (!isPasswordCorrect) {
      return res
        .status(401)
        .json({ success: false, msg: "Incorrect password!" });
    }

    const token = jwt.sign({ userId: existingUser._id }, "secret", {
      expiresIn: "24h",
    });

    res.status(200).json({
      success: true,
      data: {
        userId: existingUser._id,
        username: existingUser.username,
        email: existingUser.email,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

const logout = async (req, res) => {};

module.exports = {
  register,
  login,
  logout,
};
