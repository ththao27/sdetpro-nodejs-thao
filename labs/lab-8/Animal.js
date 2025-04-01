"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    function Animal(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    Animal.prototype.getName = function () {
        return this.name;
    };
    Animal.prototype.getSpeed = function () {
        return this.speed;
    };
    Animal.generateRandomSpeed = function (maxSpeed) {
        return (Math.floor(Math.random() * maxSpeed) + 1);
    };
    return Animal;
}());
exports.default = Animal;
