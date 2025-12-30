"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Duck_1 = __importDefault(require("./Duck"));
const FlyNoWay_1 = __importDefault(require("./FlyNoWay"));
const Mute_1 = __importDefault(require("./Mute"));
class DecoyDuck extends Duck_1.default {
    constructor() {
        super(new Mute_1.default(), new FlyNoWay_1.default());
    }
}
exports.default = DecoyDuck;
//# sourceMappingURL=DecoyDuck.js.map