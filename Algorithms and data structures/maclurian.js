let pi = 0;
let denominator = 1;
let sign = 1;
let previousSum = 0;
let currentSum = 0;
let counter = 0;

while(Math.abs(currentSum - previousSum) >= 0.001){
    previousSum = currentSum;
    let result = sign * 4 / denominator;
    pi += result;
    denominator += 2;
    sign = - sign;
    currentSum = pi;
    counter++
}

console.log(pi);
console.log(`Iterations: `, counter);