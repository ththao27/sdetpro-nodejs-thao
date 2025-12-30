import Duck from "./Duck";

export default class DuckController {
    static performQuack(duck: Duck): void {
        duck.performQuack();
    }
}