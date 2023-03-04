const express = require('express');
const orderRoute = express.Router();

const { createOrder, getOrder } = require('../controllers/orderController');

//GET
orderRoute.get("/getOrder", getOrder);

//POST
orderRoute.post("/createOrder", createOrder);

module.exports = orderRoute;