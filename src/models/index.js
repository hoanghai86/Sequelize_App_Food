//cấu trúc kết nối tới CSDL thông qua sequelize
//host, database, user, pass, port
// yarn add sequelize-auto
// yarn sequelize-auto -h localhost -d db_food -u root -x 1234 -p 3306 --dialect mysql -o src/models -l es6

const { Sequelize } = require("sequelize");
const config = require("../config/index");

// console.log(config)

const sequelize = new Sequelize(
  config.database,
  config.userName,
  config.passWord,
  {
    host: config.host,
    port: config.port,
    dialect: config.dialect,
  }
);
module.exports = sequelize;
