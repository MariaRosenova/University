function selectionSort(array) {
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }
}

function measureSelectionSortTime(arraySize) {
  const randomArray = [];
  for (let i = 0; i < arraySize; i++) {
    randomArray.push(Math.random());
  }

  const startTime = performance.now();
  selectionSort(randomArray);
  const endTime = performance.now();
  let result = endTime - startTime;
  return result;
}

const arraySize = [
  10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000,
];

for (const size of arraySize) {
  const executionTime = measureSelectionSortTime(size);
  console.log(`Array size: ${size}, Execution Time: ${executionTime} ms`);
}
