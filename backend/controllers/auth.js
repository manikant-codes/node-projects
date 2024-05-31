const { generateToken, getUserObject } = require("../helpers/authHelper");
const User = require("../models/User");
const Token = require("../models/Token");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  try {
    let objUser = { ...req.body };

    const numberOfUsers = await User.countDocuments();

    if (numberOfUsers === 0) {
      objUser.role = "admin";
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password.toString(), salt);

    const user = await User.create({ ...objUser, password: hashedPassword });

    const token = generateToken(user);

    res.status(200).json({
      success: true,
      // data: getUserObject(user),
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

    // const isPasswordCorrect = existingUser.password === password.toString();
    const isPasswordCorrect = bcrypt.compareSync(
      password.toString(),
      existingUser.password
    );

    if (!isPasswordCorrect) {
      return res
        .status(400)
        .json({ success: false, msg: "Incorrect password!" });
    }

    const token = generateToken(existingUser);

    res.status(200).json({
      success: true,
      // data: getUserObject(existingUser),
      token,
    });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

const logout = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    await Token.create({ token });

    res.status(200).json({ success: true, msg: "Logged out successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

module.exports = {
  register,
  login,
  logout,
};
