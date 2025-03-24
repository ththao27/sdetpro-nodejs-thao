"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    function Animal(name, maxSpeed) {
        this.name = name;
        this.speed = this.run(maxSpeed);
    }
    Animal.prototype.getName = function () {
        return this.name;
    };
    Animal.prototype.getSpeed = function () {
        return this.speed;
    };
    Animal.prototype.run = function (maxSpeed) {
        return (Math.floor(Math.random() * maxSpeed) + 1);
    };
    return Animal;
}());
exports.default = Animal;
