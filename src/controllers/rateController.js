const { successCode, errorCode } = require("../config/response");
const initModel = require("../models/init-models");
const sequelize = require("../models/index");
const moment = require("moment/moment");
const model = initModel(sequelize);

//THÊM ĐÁNH GIÁ
const createRate = (req, res) =>{
    res.status(200).send("Create rate")
    // try {
    //     let data = await model.rate_res.create({
    //         rate: req.body.rate,
    //         re: req.body.re,
    //         user: req.body.user
    //     });
    //     successCode(res, data, "Thêm dữ liệu thành công!")
    // } catch (error) {
    //     errorCode(res, json.stringify(error));
    // }
}

//LẤY DANH SÁCH ĐÁNH GIÁ THEO NHÀ HÀNG VÀ USER
const getRate = async (req, res) => {
    // res.status(200).send("Get rate")
    try {
        let data = await model.rate_res.findAll({
            include: ["re", "user"]
        });
        successCode(res, data, "Lấy dữ liệu thành công!")
    } catch (error) {
        errorCode(res, json.stringify(error));
    }
}

module.exports = {
    getRate,
    createRate
}