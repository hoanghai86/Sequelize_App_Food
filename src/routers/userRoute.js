const express = require("express");
const userRoute = express.Router();

//import controller
const { getUser, createUser, login, signUp } = require("../controllers/userController");

//GET
userRoute.get("/getUser", getUser);

//POST
userRoute.post("/createUser", createUser);

//LOGIN
userRoute.post("/login", login);

//SIGNUP
userRoute.post("/signup", signUp);


module.exports = userRoute;
