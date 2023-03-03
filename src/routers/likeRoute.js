const express = require("express");
const likeRoute = express.Router();

//import controller
const { createLike, deleteLike, getLike } = require("../controllers/likeController");


//POST
likeRoute.post("/createLike", createLike)

//DELETE
likeRoute.delete("/deleteLike/:user_id/:res_id", deleteLike)

//GET
likeRoute.get("/getLike", getLike)

module.exports = likeRoute;