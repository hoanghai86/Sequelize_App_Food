const express = require("express");
const rootRoute = express.Router();

const userRoute = require("./userRoute");
const foodRoute = require("./foodRoute");
const likeRoute = require("./likeRoute");
const rateRoute = require("./rateRoute");

rootRoute.use("/user", userRoute);
rootRoute.use("/food", foodRoute);
rootRoute.use("/like", likeRoute);
rootRoute.use("/rate", rateRoute);

module.exports = rootRoute;
