function anchorSearch(arr, targets) {
    let i = 0;
    let count = 0;
  
    while (i < arr.length && !targets.includes(arr[i])) {
      i++;
      count++;
    }
  
    return { found: i !== arr.length, count };
  }
  
  let myArray = ['ш','и', 'ш', 'к', 'о', 'в', 'а'];
  
  let searchValues = ['а', 'б', 'в', 'г'];
  
  for (let i = 0; i < searchValues.length; i++) {
    let searchValue = searchValues[i];
    let result = anchorSearch(myArray, searchValue);
  
    if (result.found) {
      console.log(`Стойността ${searchValue} е намерена в масива след ${result.count} проверки.`);
    } else {
      console.log(`Стойността ${searchValue} не е намерена в масива след ${result.count} проверки.`);
    }
  }
  