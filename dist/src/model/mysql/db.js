"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const mysql_config_1 = __importDefault(require("../../../config/mysql-config"));
const sequelize = new sequelize_1.default(mysql_config_1.default.database, mysql_config_1.default.username, mysql_config_1.default.password, {
    host: mysql_config_1.default.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});
exports.default = sequelize;
//# sourceMappingURL=db.js.map