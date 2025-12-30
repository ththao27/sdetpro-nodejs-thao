import BabyDuck from "./BabyDuck";
import Duck from "./Duck";
import DuckController from "./DuckController";
import MallardDuck from "./MallardDuck";
import Quack from "./Quack";

let babyDuck: Duck = new BabyDuck();
let mallardDuck: Duck = new MallardDuck();

babyDuck.setQuackBehavior(new Quack());

DuckController.performQuack(babyDuck);

