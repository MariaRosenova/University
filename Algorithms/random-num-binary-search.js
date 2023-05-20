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

for (let i = 0; i < elementsForSearch.length; i++) {
  let searchValue = elementsForSearch[i];
  let result = binarySearch(store, searchValue);

  if (result) {
    console.log(
      `The value "${searchValue}" IS found.`
    );
  } else {
    console.log(`The value ${searchValue} is NOT found.`);
  }
}
var endTime = performance.now();
let calculatedTime = endTime - startTime;
console.log(`Time of execution: ${calculatedTime}`);

function binarySearch(array, element) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (array[mid] === element) {
      return mid;
    } else if (array[mid] < element) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1; //in case that the element is not found
}
