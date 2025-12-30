import FlyBehavior from './FlyBehavior';
import QuackBehavior from './QuackBehavior';

export default class Duck {
  protected flyBehavior: FlyBehavior;
  protected quackBehavior: QuackBehavior;

  constructor(quackBehavior: QuackBehavior, flyBehavior: FlyBehavior) {
    this.flyBehavior = flyBehavior;
    this.quackBehavior = quackBehavior;
  }

  performQuack(): void {
    this.quackBehavior.quack();
  }

  performFly(): void {
    this.flyBehavior.fly();
  }

  setFlyBehavior(flyBehavior: FlyBehavior): void {
    this.flyBehavior = flyBehavior;
  }

  setQuackBehavior(quackBehavior: QuackBehavior): void {
    this.quackBehavior = quackBehavior;
  }
}
