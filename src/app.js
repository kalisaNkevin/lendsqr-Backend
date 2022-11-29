"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
const uri = process.env.MONGO_URI;
const app = (0, express_1.default)();
app.set("port", process.env.PORT);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(app.get("port"), () => {
    return console.log(`Express is listening at http://localhost:%d`, app.get("port"));
});
mongoose_1.default
    .connect(uri)
    .then(() => {
    console.log('|******Database connected successful!!!******|');
})
    .catch((error) => {
    console.log('Database Not Connected');
    console.log({ Error_Message: error });
});
