const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema({
  token: String,
  createdAt: { type: Date, default: Date.now, expires: "24h" },
});

module.exports = mongoose.model("Token", tokenSchema);
