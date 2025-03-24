"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Horse_1 = require("./Horse");
var Dog_1 = require("./Dog");
var Tiger_1 = require("./Tiger");
main();
function main() {
    var horse = new Horse_1.default("Horse", 100);
    var dog = new Dog_1.default("Dog", 100);
    var tiger = new Tiger_1.default("Tiger", 100);
    var runningAnimal = [horse, dog, tiger];
    var winner = runningAnimal.reduce(function (a, b) { return a.getSpeed() > b.getSpeed() ? a : b; });
    console.log("Winner is ".concat(winner.getName(), " with speed ").concat(winner.getSpeed(), " km/h"));
}
