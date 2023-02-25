const express = require("express");
const likeRoute = express.Router();

//import controller
const { createLike } = require("../controllers/likeController");

//POST
likeRoute.post("/createLike", createLike)

module.exports = likeRoute;