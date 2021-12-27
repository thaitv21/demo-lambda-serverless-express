"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserModel_1 = __importDefault(require("./mongo/UserModel"));
const User_1 = require("../models/User");
class MongoDatabaseProvider {
    constructor() {
        this.persist = (object) => __awaiter(this, void 0, void 0, function* () {
            const model = this.mapper(object);
            if (model) {
                yield model.save();
            }
        });
        this.retrieve = () => __awaiter(this, void 0, void 0, function* () {
            return Promise.reject();
        });
        this.mapper = (object) => {
            if (object instanceof User_1.User) {
                return new UserModel_1.default(object);
            }
        };
        (0, mongoose_1.connect)('mongodb://localhost:27017/test').then();
    }
}
exports.default = MongoDatabaseProvider;
