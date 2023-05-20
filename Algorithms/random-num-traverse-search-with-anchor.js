function generateRandomElement() {
  return Math.floor(Math.random() * 100000) + 1; //between 1 and 100 000
}

let store = [];
for (let i = 0; i < 10000; i++) {
  let randomElement = generateRandomElement();
  store.push(randomElement);
}

let elementsForSearch = [6, 99, 10, 3, 84];

store = [...store, ...elementsForSearch];

var startTime = performance.now();
for(let i = 0; i < elementsForSearch.length; i++){
    let element = elementsForSearch[i];
    let result = anchorSearch(store, element);

    if(result.found)
    {
        console.log(`FOUND ${element}`);
    }
}
var endTime = performance.now();
let calculatedTime = endTime - startTime;
console.log(`Time of execution: ${calculatedTime}`);

function anchorSearch(store, element) {
    let i = 0;
    while (i < store.length && store[i] !== element) {
        i++;
  }
  return {found: i!==store.length};
}

