const { successCode, errorCode } = require("../config/response");
const initModel = require("../models/init-models");
const sequelize = require("../models/index");
const model = initModel(sequelize);

//THÊM ĐÁNH GIÁ
const createRate = async (req, res) => {
    // res.status(200).send("Create rate")
    try {
        let { user_id, res_id, amount } = req.body;
        let date_rate = new Date();

        let data = {
            user_id,
            res_id,
            amount,
            date_rate
        }
        await model.rate_res.create(data);
        successCode(res, data, "Đánh giá thành công!")
    } catch (error) {
        errorCode(res, JSON.stringify(error.message))
    }
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