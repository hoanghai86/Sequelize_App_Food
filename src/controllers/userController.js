const { successCode, failCode, errorCode } = require("../config/response.js");
const initModels = require("../models/init-models.js");  //initModel quản lý tất cả Model
const sequelize = require("../models/index.js"); //chuỗi kết nối tới DATABASE
const model = initModels(sequelize);

const getUser = async (req, res) => {
  try {
    let data = await model.user.findAll();
    // res.status(200).send(data);
    successCode(res, data, "Lấy dữ liệu thành công!");
  } catch (error) {
    errorCode(res, "Lỗi BE!");
  }
};

const createUser = (req, res) => {
  res.status(200).send("createUser user");
};

module.exports = {
  getUser,
  createUser,
};
