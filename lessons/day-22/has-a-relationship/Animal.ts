import Movable from './Movable';

export default class Animal implements Movable {
  move(): void {
    console.log('Animal moving...');
  }
}
