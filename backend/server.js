require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { start } = require("./utils/serverUtils");
const authRouter = require("./routes/authRouter");

const app = express();

app.use(cors());
app.use(cookieParser("secret"));
app.use(express.json());

app.use("/auth", authRouter);

start(app);
