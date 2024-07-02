const User = require("../models/User");
const { sendVerificationEmail } = require("../utils/emailUtils");
const { sendErrorResponse } = require("../utils/serverUtils");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

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
      return sendErrorResponse(res, "Email is already verified.", 400);
    }

    existingUser.verificationToken = "";
    existingUser.isVerified = true;
    existingUser.verifiedAt = new Date();

    await existingUser.save();

    res
      .status(200)
      .json({ success: true, msg: "Email verified successfully." });
  } catch (error) {
    sendErrorResponse(res, error.message);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return sendErrorResponse(res, "No such email exists.", 404);
    }

    if (!existingUser.isVerified) {
      return sendErrorResponse(res, "Account not verified.", 401);
    }

    if (existingUser.password !== password) {
      return sendErrorResponse(res, "Invalid password.", 401);
    }

    const tokenUser = {
      userId: existingUser._id,
      userName: existingUser.fname + " " + existingUser.lname,
      role: existingUser.role,
    };

    const accessToken = jwt.sign(tokenUser, "secret", { expiresIn: "1d" });

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: false,
      signed: true,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    });

    res.status(200).json({ success: true, msg: "Logged in successfuly." });
  } catch (error) {
    sendErrorResponse(res, error.message);
  }
};

const logout = async (req, res) => {
  try {
    const { accessToken } = req.signedCookies;

    if (!accessToken) {
      sendErrorResponse(res, "No token provided.", 401);
    }

    const tokenUser = jwt.verify(accessToken, "secret");

    res.cookie("accessToken", "", {
      httpOnly: true,
      expires: new Date(Date.now()),
    });

    res.status(200).json({ success: true, msg: "Logged out successfully." });
  } catch (error) {}
};
const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return sendErrorResponse(res, "Email is required.", 400);
    }

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return sendErrorResponse(res, "No such user exists.", 404);
    }

    const resetPasswordToken = crypto.randomBytes(40).toString("hex");

    // await sendResetPasswordEmail({
    //   email: user.email,
    //   token: passwordToken,
    // });
    const tenMinutes = 1000 * 60 * 10;
    const resetPasswordTokenExpiry = new Date(Date.now() + tenMinutes);

    existingUser.resetPasswordToken = passwordToken;
    existingUser.resetPasswordTokenExpiry = passwordTokenExpirationDate;

    await existingUser.save();
  } catch (error) {}
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
