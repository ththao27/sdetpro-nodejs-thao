"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    getName() {
        return this.name;
    }
    getSpeed() {
        return this.speed;
    }
    static generateRandomSpeed(maxSpeed) {
        return (Math.floor(Math.random() * maxSpeed) + 1);
    }
}
exports.default = Animal;
