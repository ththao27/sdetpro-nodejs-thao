"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Engine_1 = __importDefault(require("./Engine"));
class GasEngine extends Engine_1.default {
    start() {
        console.log('Gas Engine started...');
    }
}
exports.default = GasEngine;
//# sourceMappingURL=GasEngine.js.map