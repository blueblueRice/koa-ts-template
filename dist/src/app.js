"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const app = new koa_1.default();
const koa_views_1 = __importDefault(require("koa-views"));
const koa_json_1 = __importDefault(require("koa-json"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const koa_logger_1 = __importDefault(require("koa-logger"));
const koa2_cors_1 = __importDefault(require("koa2-cors"));
const onerror = require('koa-onerror');
// cors
app.use(koa2_cors_1.default());
const index_1 = __importDefault(require("./controller/index"));
// error handler
onerror(app);
// middlewares
app.use(koa_bodyparser_1.default({
    enableTypes: ['json', 'form', 'text']
}));
app.use(koa_json_1.default());
app.use(koa_logger_1.default());
app.use(require('koa-static')(__dirname + '/public'));
app.use(koa_views_1.default(__dirname + '/views', {
    extension: 'html'
}));
// logger
app.use(async (ctx, next) => {
    const start = Number(new Date());
    await next();
    const ms = Number(new Date()) - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});
// routes
app.use(index_1.default.routes()).use(index_1.default.allowedMethods());
// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx);
});
exports.default = app;
//# sourceMappingURL=app.js.map