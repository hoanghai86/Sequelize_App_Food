const { successCode, errorCode } = require("../config/response");
const initModel = require("../models/init-models");
const sequelize = require("../models/index");
const moment = require("moment/moment");
const model = initModel(sequelize);


//XỬ LÝ LIKE NHÀ HÀNG
const createLike = async (req, res) => {
    // res.status(200).send("Create like")
    try {
        //Lấy từ FE
        let { user_id, res_id } = req.body;
        //yarn add moment
        // let dateString = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
        // let date_like = dateString;
        
        let date_like = new Date();
        console.log(date_like);
        console.log(typeof date_like)
        let data = {
            user_id,
            res_id,
            date_like
        }

        //Thêm 1 dòng dữ liệu vào table
        await model.like_res.create(modelLike);
        successCode(res, data, "Like thành công!")

    } catch (error) {
        errorCode(res, "Lỗi BE hoặc user_id và res_id đã tồn tại!")
    }
}

//XỬ LÝ UNLIKE NHÀ HÀNG
const deleteLike = async (req, res) => {
    try {
        //Lấy từ FE
        let { user_id, res_id } = req.params;
        let data = {
            user_id,
            res_id,
        }

        //Xóa 1 dòng dữ liệu trên table
        await model.like_res.destroy({
            where: data
        });

        // let data = await model.like_res.destroy({
        //     where: {
        //         user_id: req.params.user_id,
        //         res_id: req.params.res_id
        //     }
        // })

        successCode(res, data, "Unlike thành công!")

    } catch (error) {
        errorCode(res, "Lỗi BE hoặc kiểm tra lại user_id và res_id xem truyền vào đúng không!")
    }
}

//LẤY DANH SÁCH LIKE THEO NHÀ HÀNG VÀ USER
const getLike = async (req, res) => {
    try {
        //Lấy từ FE
        let data = await model.like_res.findAll({
            include: ["re", "user"]
        })

        successCode(res, data, "Lấy danh sách like theo nhà hàng và user thành công!")
        
    } catch (error) {
        errorCode(res, "Lỗi BE!")
    }
}

module.exports = {
    createLike,
    deleteLike,
    getLike
}