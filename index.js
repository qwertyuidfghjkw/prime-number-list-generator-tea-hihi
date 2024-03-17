// index.js

function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function generatePrimeNumberList(length) {
    const primeNumberList = [];
    let number = 2;
    while (primeNumberList.length < length) {
      if (isPrime(number)) {
        primeNumberList.push(number);
      }
      number++;
    }
    return primeNumberList;
  }
  
  const length = 10;
  const primeNumberList = generatePrimeNumberList(length);
  console.log(`Prime number list of length ${length}:`, primeNumberList);
  