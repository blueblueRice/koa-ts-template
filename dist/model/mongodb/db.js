"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongo_config_1 = __importDefault(require("../../config/mongo-config"));
mongoose_1.default.Promise = global.Promise;
const options = {
    useNewUrlParser: true,
    auth: { authdb: "admin" },
    authSource: 'admin'
};
mongoose_1.default.connect(mongo_config_1.default, options);
const db = mongoose_1.default.connection;
exports.default = db;
//# sourceMappingURL=db.js.map