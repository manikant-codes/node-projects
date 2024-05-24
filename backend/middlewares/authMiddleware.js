const jwt = require("jsonwebtoken");
const Token = require("../models/Token");

async function authMiddleware(req, res, next) {
  try {
    let token = req.headers.authorization;
    token = token && token.split(" ")[1];

    if (!token) {
      return res
        .status(400)
        .json({ success: false, msg: "No token provided!" });
    }

    const user = jwt.verify(token, "secret");

    const existingToken = await Token.findOne({ token: token });

    if (existingToken) {
      return res.status(401).json({ success: false, msg: "Token expired!" });
    }

    req.user = user;

    next();
  } catch (error) {
    res.status(401).json({ success: false, msg: "Failed to authorize!" });
  }
}

module.exports = authMiddleware;
