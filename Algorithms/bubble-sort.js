function bubbleSort(arr){
    let counter = 0;
    let swapped = false;
    do{
        for(let i = 0; i < arr.length - 1; i++){
            for(let j = 0; j < (arr.length- 1 - i); j++){
    
                /*we check if the item at presented iteration 
                is greater than the next iteration */
    
                if(arr[j] > arr[j + 1]){
    
                    //if the condition is true then swap
                    let result = arr [j];
                    arr[j] = arr [j + 1];
                    arr[j + 1] = result;
                    swapped = true;
                    counter++;
                }
            }
        }
        return `${arr}`;
    } while(swapped)   
}
const array = [234, 43, 55, 63, 5, 6, 235, 547];
console.log(bubbleSort(array));
