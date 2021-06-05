/**
 * 10001st prime
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime number is 13.
 * What is the 10,001st prime number?
 */

const nthPrime = (number) => {
  let primes = [2];
  let higherDivisorLimit;
  let isPrime;
  for (let i = 3; primes.length < number; i += 2) {
    higherDivisorLimit = Math.sqrt(i) + 1;
    isPrime = true;
    for (let j = 0; primes[j] < higherDivisorLimit; j++) {
      if (i % primes[j] === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(i);
  }
  return primes[primes.length - 1];
};


console.log(nthPrime(10001));
