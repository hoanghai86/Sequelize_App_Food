const express = require("express");
const userRoute = express.Router();

//import controller
const { getUser, createUser } = require("../controllers/userController");

//GET
userRoute.get("/getUser", getUser);

//POST
userRoute.post("/createUser", createUser);


module.exports = userRoute;
