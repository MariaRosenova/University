let array = ['ш','и', 'ш', 'к', 'о', 'в', 'а'];
let searchValues = ['а', 'б', 'в', 'г'];
array = [...array,...searchValues];

for (let i = 0; i < searchValues.length; i++) {
    let searchValue = searchValues[i];
    let result = anchorSearch(array, searchValue);
  
    if (result.found) {
      console.log(`The value "${searchValue}" IS found after ${result.count} tests.`);
  } else{
    console.log(`The value ${searchValue} is NOT found after ${result.count}`)
  }

  function anchorSearch(array, targets) {
    let i = 0;
    let count = 0;
  
    while (i < array.length && array[i] !== targets) {
      i++;
      count++;
    }
  
    return { found: i !== array.length, count};
  }
}
//When tests >= 8, then is anchor