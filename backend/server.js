require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { start } = require("./utils/serverUtils");
const authRouter = require("./routes/authRouter");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);

start(app);
