const express = require("express");
const rootRoute = express.Router();

const userRoute = require("./userRoute");
const foodRoute = require("./foodRoute");
const likeRoute = require("./likeRoute");

rootRoute.use("/user", userRoute);
rootRoute.use("/food", foodRoute);
rootRoute.use("/like", likeRoute);

module.exports = rootRoute;
