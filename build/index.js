"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_session_1 = __importDefault(require("cookie-session"));
'express';
const AppRouter_1 = require("./AppRouter");
const loginRoutes_1 = require("./routes/loginRoutes");
const app = express();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cookie_session_1.default)({ keys: ['kronos'] }));
app.use(loginRoutes_1.router);
app.use(AppRouter_1.AppRouter.getInstance());
app.listen(3000, () => {
    console.log('Listening on port 3000');
});
