"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Engine_1 = __importDefault(require("./Engine"));
class ElectricEngine extends Engine_1.default {
    start() {
        console.log('Electric Engine started...');
    }
}
exports.default = ElectricEngine;
//# sourceMappingURL=ElectricEngine.js.map