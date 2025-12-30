"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppiumDriver_1 = __importDefault(require("./AppiumDriver"));
class IOSDriver extends AppiumDriver_1.default {
    launchApp() {
        console.log('Launching iOS session');
    }
    closeApp() {
        console.log('Closing iOS session');
    }
}
exports.default = IOSDriver;
//# sourceMappingURL=IOSDriver.js.map