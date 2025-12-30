"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Human_1 = __importDefault(require("./Human"));
class Controller {
    static move(movable) {
        movable.move();
    }
    static talk(talkable) {
        talkable.talk();
    }
}
exports.default = Controller;
Controller.move(new Human_1.default());
//# sourceMappingURL=Controller.js.map