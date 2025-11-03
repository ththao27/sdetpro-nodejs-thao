import Horse from './Horse';
import Dog from './Dog';
import Tiger from './Tiger';

main();
function main() {
  const horse = new Horse('Horse');
  const dog = new Dog('Dog');
  const tiger = new Tiger('Tiger');
  const runningAnimal = [horse, dog, tiger];

  const winner = runningAnimal.reduce((a, b) => (a.getSpeed() > b.getSpeed() ? a : b));

  console.log(`Winner is ${winner.getName()} with speed ${winner.getSpeed()} km/h`);
}
