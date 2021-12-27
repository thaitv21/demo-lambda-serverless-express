"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongodbProvider = void 0;
const MongoDatabaseProvider_1 = __importDefault(require("./MongoDatabaseProvider"));
const providers = {
    mongodbProvider: new MongoDatabaseProvider_1.default()
};
exports.mongodbProvider = providers.mongodbProvider;
