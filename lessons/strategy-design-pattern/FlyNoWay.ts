import FlyBehavior from './FlyBehavior';

export default class FlyNoWays implements FlyBehavior {
  fly(): void {
    console.log("I can't fly");
  }
}
