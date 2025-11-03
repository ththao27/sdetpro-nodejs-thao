import Human from './Human';
import Movable from './Movable';
import Talkable from './Talkable';

export default class Controller {
  static move(movable: Movable): void {
    movable.move();
  }

  static talk(talkable: Talkable) {
    talkable.talk();
  }
}

Controller.move(new Human());
