"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const db_1 = __importDefault(require("./db"));
exports.default = db_1.default.define('index', {
    id: {
        type: sequelize_1.default.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
}, {
    timestamps: false
});
//# sourceMappingURL=index.js.map