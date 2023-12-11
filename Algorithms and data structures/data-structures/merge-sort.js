
function merge(array, p, q, r) {
  let n1 = q - p + 1;
  let n2 = r - q;

  //create copies of subarray
  let leftArr = new Array(n1);
  let rightArr = new Array(n2);

  for (let i = 0; i < n1; i++) {
    leftArr[i] = array[p + i];
  }
  for (let j = 0; j < n2; j++) {
    rightArr[j] = array[q + 1 + j];
  }
  //Maintain current index of subarrays
  let i = 0;
  let j = 0;
  let k = p;

  while (i < n1 && j < n2) {
    if (leftArr[i] <= rightArr[j]) {
      array[k] = leftArr[i];
      i++;
    } else {
      array[k] = rightArr[j];
      j++;
    }

    k++;
  }

  //when we run out of elements in either leftArr or rightArr, pick up the remaining elements and put in A[p..r]
  while (i < n1) {
    array[k] = leftArr[i];
    i++;
    k++;

    console.log("picking up the remaining from the right array");
  }
  while (j < n2) {
    array[k] = rightArr[j];
    j++;
    k++;

    console.log("Picking up remaining from the left array");
  }

  return array;
}

let array = [6, 5, 12, 10, 9, 1];
let firstIndex = 0;
let lastIndex = array.length - 1;
let middleElement = Math.floor((firstIndex + lastIndex) / 2);
merge(array, firstIndex, middleElement, lastIndex);
console.log(array);
