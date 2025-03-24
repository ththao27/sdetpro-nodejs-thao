export default class Animal {

    protected name: string;
    protected speed: number;

    constructor(name: string, maxSpeed: number) {
        this.name = name;
        this.speed = this.run(maxSpeed);
    }

    public getName(): string {
        return this.name;
    }
    public getSpeed(): number {
        return this.speed;
    }

    private run(maxSpeed: number): number {
        return  (Math.floor(Math.random() * maxSpeed) + 1);
    }
}

