    let arr = [2,0,8,3,4,1,5];
    let n = 7;
    let counter = 0;
    
    for(let i = 1; i < n; i++){
        for(let j = i + 1; j < n; j++){
            if (arr[i] > arr[j]) {
                counter++;
            }
        }
    }
    console.log(counter);
