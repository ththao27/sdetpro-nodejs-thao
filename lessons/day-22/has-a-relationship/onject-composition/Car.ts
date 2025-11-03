// Object Composition -> có nghĩa ngta muốn tổ chức HAS-A-RELATIONSHIP

import Engine from './Engine';

export default class Car {
  private engine: Engine;

  constructor(engine: Engine) {
    this.engine = engine;
  }

  start(): void {
    this.engine.start();
  }

  move(): void {
    console.log('Car moving...');
  }

  stop(): void {
    console.log('Car stoppedd...');
  }
}
