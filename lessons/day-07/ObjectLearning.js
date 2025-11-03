let teo = {
  name: 'Teo',
  age: 20,
  'my gender': 'M',
};

//READ
console.log(teo.name);
console.log(teo['my gender']);

//UPDATE
teo.name = 'Ti';
console.log(teo);

// Destructure: phân rã
const { name, age, ['my gender']: gender } = teo;

// Function with destructured params

function sayHello({ name }) {
  console.log(`Hello ${name}`);
}

// DELETE
delete teo.name;
console.log(teo);
