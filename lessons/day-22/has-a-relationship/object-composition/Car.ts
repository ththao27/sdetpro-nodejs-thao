// Object Composition -> có nghĩa ngta muốn tổ chức HAS-A-RELATIONSHIP

import ElectricEngine from './ElectricEngine';
import Engine from './Engine';
import GasEngine from './GasEngine';

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

// Object composition
let electricCar = new Car(new ElectricEngine());
electricCar.start();
let gasCar = new Car(new GasEngine());
