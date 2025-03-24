import Animal from "./Animal";

export default class Dog extends Animal {

    constructor(name: string, speed: number) {
        super(name, speed);
    }
}