const User = require("../models/User");
const { sendVerificationEmail } = require("../utils/emailUtils");
const { sendErrorResponse } = require("../utils/serverUtils");
const crypto = require("crypto");

const register = async (req, res) => {
  try {
    const { fname, lname, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return sendErrorResponse(res, "Email already exists.", 400);
    }

    const isFirstUser = (await User.countDocuments()) === 0;

    const verificationToken = crypto.randomBytes(40).toString("hex");

    const user = new User();
    user.fname = fname;
    user.lname = lname;
    user.email = email;
    user.password = password;
    user.role = isFirstUser ? "admin" : "user";
    user.verificationToken = verificationToken;

    await user.save();

    await sendVerificationEmail(email, verificationToken);

    res.status(200).json({ success: true, msg: "Account created." });
  } catch (error) {
    sendErrorResponse(res, error.message);
  }
};

const verifyEmail = async (req, res) => {
  try {
    const { email, verificationToken } = req.body;

    if (!email || !verificationToken) {
      return sendErrorResponse(
        res,
        "Email and verification token are required.",
        400
      );
    }

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return sendErrorResponse(res, "No such email exists.", 400);
    }

    if (existingUser.isVerified) {
      return sendErrorResponse(res, "Email is already verified..", 400);
    }
  } catch (error) {
    sendErrorResponse(res, error.message);
  }
};

const login = async (req, res) => {
  res.send("login");
};

const logout = async (req, res) => {
  res.send("logout");
};
const forgotPassword = async (req, res) => {
  res.send("forgotPassword");
};
const resetPassword = async (req, res) => {
  res.send("resetPassword");
};

module.exports = {
  register,
  login,
  verifyEmail,
  logout,
  forgotPassword,
  resetPassword,
};
