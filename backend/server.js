require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { start } = require("./utils/serverUtils");
const authRouter = require("./routes/authRouter");
const userRouter = require("./routes/userRouter");
const productsRouter = require("./routes/productsRouter");

const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/products", productsRouter);

start(app);
