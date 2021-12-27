"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
console.log(process.argv);
app_1.default.listen(process.env.PORT, () => {
    console.log(`App listening at http://127.0.0.1:${process.env.PORT}`);
});
