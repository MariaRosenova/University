function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    console.log(`Potuva - ${n}`);
    const result = n * factorial(n - 1);

    console.log(`Izpluva - ${result}`);
    return result;
  }
}

const result = factorial(5);
console.log(result);
