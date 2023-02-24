const { successCode, errorCode } = require("../config/response");
const initModel = require("../models/init-models");
const sequelize = require("../models/index");
const model = initModel(sequelize);

const getFood = async (req, res) => {
  try {
    // let data = await model.food.findAll({
    //   include: ["type"],
    // });

    let data = await model.food.findAll({
        include:["user_id_user_orders"]
    });

    successCode(res, data, "Lấy dữ liệu thành công!");
  } catch (error) {
    errorCode(res, "Lỗi BE!");
  }
};

module.exports = {
  getFood,
};
