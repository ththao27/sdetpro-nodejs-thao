"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Duck {
    constructor(quackBehavior, flyBehavior) {
        this.flyBehavior = flyBehavior;
        this.quackBehavior = quackBehavior;
    }
    performQuack() {
        this.quackBehavior.quack();
    }
    performFly() {
        this.flyBehavior.fly();
    }
    setFlyBehavior(flyBehavior) {
        this.flyBehavior = flyBehavior;
    }
    setQuackBehavior(quackBehavior) {
        this.quackBehavior = quackBehavior;
    }
}
exports.default = Duck;
//# sourceMappingURL=Duck.js.map