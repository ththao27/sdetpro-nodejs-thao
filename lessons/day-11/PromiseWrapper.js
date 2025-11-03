console.log('1. Start');
waitForResponse().then(gotoTheCoffeeShop);

// Wrap an asynchronus function with a promise

function gotoTheCoffeeShop() {
  console.log('3. Go to the coffee shop');
}
function waitForResponse() {
  return new Promise(wrapper);
}

function wrapper(resolve, reject) {
  setTimeout(function () {
    console.log('2. Teo oi uong caphe khong');
    resolve();
  }, 1 * 1000);
}
