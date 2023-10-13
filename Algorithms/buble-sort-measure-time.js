function bubbleSort(arr) {
    let swapped = false;
    do {
      swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
          if (arr[j] > arr[j + 1]) {
            let result = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = result;
            swapped = true;
          }
        }
      }
    } while (swapped);
  }
  
  function measureBubbleSortTime(arraySize) {
    const randomArray = [];
    for (let i = 0; i < arraySize; i++) {
      randomArray.push(Math.random());
    }
  
    const startTime = performance.now();
    bubbleSort(randomArray);
    const endTime = performance.now();
    return endTime - startTime; // Return the execution time
  }
  
  const arraySizes = [10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000];
  
  for (const size of arraySizes) {
    const executionTime = measureBubbleSortTime(size);
    console.log(`Array size: ${size}, Execution Time: ${executionTime} ms`);
  }
  