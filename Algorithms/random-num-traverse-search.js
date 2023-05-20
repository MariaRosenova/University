function generateRandomElement() {
  return Math.floor(Math.random() * 100000) + 1; //between 1 and 100 000
}

let store = [];
for (let i = 0; i < 10000; i++) {
  let randomElement = generateRandomElement();
  store.push(randomElement);
}

let elementsForSearch = [6, 99, 10, 3, 84];

var startTime = performance.now();

for (let i = 0; i < store.length; i++) {
    elementsForSearch.forEach((el) => {
        if (el === store[i]) {
            console.log(`FOUND: ${store[i]}`)
        }
    })
}
var endTime = performance.now();
let calculatedTime = endTime - startTime;
console.log(`Time of execution: ${calculatedTime}`);
