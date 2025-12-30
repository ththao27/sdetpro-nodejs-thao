class DebugMode {
    constructor(private a: number, private b: number) {
        this.a = a;
        this.b = b;
    }

    sum(): number {
        return this.a + this.b
    }
}

const debug: DebugMode = new DebugMode(1, 2);
const result = debug.sum();
console.log(result)

console.log('jagdjgajd')