import Duck from './Duck';
import FlyNoWays from './FlyNoWay';
import Mute from './Mute';

export default class DecoyDuck extends Duck {
  constructor() {
    super(new Mute(), new FlyNoWays());
  }
  
}
