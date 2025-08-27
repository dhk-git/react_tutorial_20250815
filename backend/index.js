require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const PORT = 3000;

const userRoutes = require("./routes/user");

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.use("/api/auth", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello world");
});

mongoose
  .connect(process.env.MONGO_URI, { dbName: "companyWebsite" })
  .then(() => console.log("MongoDB와 연결 되었습니다."))
  .catch((err) => console.log("Mongodb와 연결 실패", err));

app.listen(PORT, () => {
  console.log("Server is running");
});
