require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const UserRoute = require("./routes/user.route.js");
const AdminRoute = require("./routes/admin.route.js");

//middelware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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
