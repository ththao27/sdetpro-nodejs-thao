import Duck from './Duck';
import FlyNoWays from './FlyNoWay';
import Squeak from './Squeak';

export default class BabyDuck extends Duck {
  constructor() {
    super(new Squeak(), new FlyNoWays());
  }
  
}
