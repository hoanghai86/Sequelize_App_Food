const express = require("express");
const rateRoute = express.Router();

//import controller
const { getRate, createRate } = require("../controllers/rateController");

//POST
rateRoute.post("/createRate", createRate)

//GET
rateRoute.get("/getRate", getRate)

module.exports = rateRoute;