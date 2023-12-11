function insertion(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }

  return arr;
}

function measureInsertionSortTime(arraySize) {
  const randomArray = [];
  for (let i = 0; i < arraySize; i++) {
    randomArray.push(Math.random());
  }

  const startTime = performance.now();
  insertion(randomArray);
  const endTime = performance.now();

  const result = endTime - startTime;
  return result;
}
const arraySize = [
    10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000,
  ];

for (const size of arraySize) {
    const executionTime = measureInsertionSortTime(size);
    console.log(`Array size: ${size}, Execution Time: ${executionTime} ms`);
}