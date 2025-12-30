"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AndroidDriver_1 = __importDefault(require("./AndroidDriver"));
const IOSDriver_1 = __importDefault(require("./IOSDriver"));
class DriverManager {
    // Static là share resource, nếu để session đó là static thì khi chạy parallel thì nếu mà session khác bị ngắt là sẽ bị ngắt hết/ terminate
    static getAppiumDriver(platform) {
        switch (platform) {
            case 'android':
                return new AndroidDriver_1.default();
            case 'ios':
                return new IOSDriver_1.default();
            default:
                throw new Error('Invalid platform');
        }
    }
}
exports.default = DriverManager;
//# sourceMappingURL=DriverManager.js.map