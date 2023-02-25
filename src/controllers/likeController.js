const { successCode, errorCode } = require("../config/response");
const initModel = require("../models/init-models");
const sequelize = require("../models/index");
const model = initModel(sequelize);

//XỬ LÝ LIKE NHÀ HÀNG
const createLike = (req,res) =>{
    res.status(200).send("Create like")
}

//XỬ LÝ UNLIKE NHÀ HÀNG

//LẤY DANH SÁCH LIKE THEO NHÀ HÀNG VÀ USER

module.exports = {
    createLike,
}