function binarySearch(arr, key) {
    let low = 0;
    let high = arr.length - 1;
    
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      
      if (arr[mid] === key) {
        return true;
      } else if (arr[mid] < key) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    
    return false; 
  }
  
  let concatenatedString = "108403Шишкова";
  let valuesToSearch = [9, 8, 7, "я", "ю", "ъ", "о"];
  
  valuesToSearch.forEach((value) => {
    if (concatenatedString.includes(value)) {
      console.log(`The value "${value}" is found.`);
    } else {
      console.log(`The value "${value}" is not found`);
    }
  });
  
  