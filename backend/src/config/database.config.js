"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = void 0;
var databaseConfig = function () { return ({
    uri: process.env.MONGODB_URI,
}); };
exports.databaseConfig = databaseConfig;
