let gcdResult = 0;

function euclideanAlgorithm(a, b) {
  if (b === 0) {
    gcdResult = a;
    console.log(`Izpluva - ${gcdResult}`);
    return;
  }
  console.log(`Potuva - ${b}`);
  const result = euclideanAlgorithm(b, a % b);
  
  return result;

}

const num1 = 28657; 
const num2 = 46368; 
//4181 и 6765 - съседни числа
//28657 и 46368 - несъседни числа

euclideanAlgorithm(num1, num2);
console.log(`GCD of ${num1} and ${num2} is: ${gcdResult}`);
