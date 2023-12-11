function sortArray(array) {
    if (array.length <= 1) {
        return array;
    }

    const pivot = array[Math.floor(array.length / 2)];

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

    return sortArray(left).concat(equal, sortArray(right));
}

const array = [0, 3, 4, 2, 1, 2, 5, 0, 7, 9];
console.log(sortArray(array));
