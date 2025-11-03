import Movable from './Movable';
import Talkable from './Talkable';

export default class Human implements Movable, Talkable {
  talk(): void {
    console.log('Human talking...');
  }

  move(): void {
    console.log('Human moving...');
  }
}
