function quickSort(array) {

  if (array.length <= 1) {
    return array;
  }

  let firstElement = 0;
  let lastElement = array - 1;
  let pivot = Math.floor((firstElement + lastElement) / 2);

  let left = [];
  let right = [];
  let equal = [];

  for (let element of array) {
    if (element < pivot) {
      left.push(element);
    } else if (element > pivot) {
      right.push(element);
    } else {
      equal.push(element);
    }
  }

//   return sortArray(left).concat(equal, sortArray(right));
}

function generateArrayWithRandomNumbers(arraySize) {

  const arrayOfRandomEl = [];
  for (let i = 0; i < arraySize; i++) {
    arrayOfRandomEl.push(Math.random());
  }

  const startTime = performance.now();
  quickSort(arrayOfRandomEl);
  const endTime = performance.now();

  const result = endTime - startTime;
  return result;
}

const arraySize = [
  10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000,
];

for (const size of arraySize) {
    const executionTime = generateArrayWithRandomNumbers(size);
    console.log(`Array size: ${size}, Execution Time: ${executionTime} ms`)
}
