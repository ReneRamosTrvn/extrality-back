require("dotenv").config();
var cors = require("cors");

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const UserRoute = require("./routes/user.route.js");
const AdminRoute = require("./routes/admin.route.js");

//middelware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//routes
app.use("/api/admin", AdminRoute);
app.use("/api/user", UserRoute);

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Connected to Database");
    app.listen(3000, () => console.log("Server Started"));
  })
  .catch((err) => {
    console.error(err);
  });
