function binarySearch(arr, key){
    let low = 0;
    let high = arr.length - 1;

    while(low <= high){
        let mid = Math.round((low+high)/2);

        if(arr[mid] === key){
            return mid;
        } else if(arr[mid] < key){
            low = mid + 1;
        }
        else{
            high = mid - 1;
        }
    }
    return -1

}

let myArray = [1,2,3,4,5,6,7,8,9,10];
let searchKey = 7;
let result = binarySearch(myArray, searchKey);
if(result !== - 1){
    console.log(`Елементът е намерен на позиция ${result}`)
}
else{
    console.log(`Елементът не е намерен.`)
}