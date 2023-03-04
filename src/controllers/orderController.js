const { successCode, errorCode } = require("../config/response");
const initModel = require("../models/init-models");
const sequelize = require("../models/index");
const model = initModel(sequelize);

//LẤY DANH SÁCH ORDER
const getOrder = async (req, res) => {
    try {
        let data = await model.order.findAll();
        successCode(res, data, "Lấy danh sách order thành công!");
    } catch (error) {
        errorCode(res, JSON.stringify(error.message));
    }
}

//THÊM ORDER
const createOrder = async (req, res) => {
    // res.status(200).send("Created Order");
    try {
        let { user_id, food_id, amount, code, arr_sub_id = [] } = req.body;
        let data = {
            user_id,
            food_id,
            amount,
            code,
            arr_sub_id: JSON.stringify(arr_sub_id)
        }
        await model.order.create(data);
        successCode(res, data, "Order thành công!")

    } catch (error) {
        errorCode(res, JSON.stringify(error.message))
    }
}

module.exports = { getOrder, createOrder };

