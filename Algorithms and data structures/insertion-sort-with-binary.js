function modifiedInsertionSort(array) {
  for (let i=1; i<array.length; i++){
    let currentElement = array[i];
    let j = i - 1;

    while (j >= 0 && array[j]>currentElement) {
        array[j + 1] = array[j]; // shift the larger to the right
        j--;
    }
    array[j+1] = currentElement;

  }
  return array;
}

const array = [5, 4, 1, 3, 2];
console.log(modifiedInsertionSort(array));
