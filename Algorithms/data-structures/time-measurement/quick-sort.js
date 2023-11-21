function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array[0];

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
}

function generateArrayWithRandomNumbers(arraySize) {
  const arrayOfElements = [];
  for (let i = 1; i < arraySize; i++) {
    arrayOfElements.push(i);
  }

  const startTime = performance.now();
  quickSort(arrayOfElements);
  const endTime = performance.now();

  const result = endTime - startTime;
  return result;
}

const arraySize = [
  10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000,
];

for (const size of arraySize) {
  const executionTime = generateArrayWithRandomNumbers(size);
  console.log(`Array size: ${size}, Execution Time: ${executionTime} ms`);
}
