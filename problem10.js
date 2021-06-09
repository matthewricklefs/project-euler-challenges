/**
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 * Find the sum of all the primes below two million.
 */

function primeNumberGen(param) {
  if (param === 1) {
    return false;
  }
  if (param === 2) {
    return true;
  }
  if (param % 2 === 0) {
    return false;
  }

  var ceil = Math.ceil(Math.sqrt(param));

  for (var i = 3; i <= ceil; i += 2) {
    if (param % i === 0) {
      return false;
    }
  }
  return true;
}
// test if primeNumberGen works;
// console.log(primeNumberGen(17));
// console.log(primeNumberGen(18));

// function that loops to count primes

function sumPrimes(param) {
  // array for collecting primes
  var array = [];
  // starting the loop
  for (var j = 2; j <= param; j++) {
    // identifying primes and pushing to array
    if (primeNumberGen(j)) {
      array.push(j);
    }
  }

  // function to sum the array
  var sumArray = array.reduce(function add(a, b) {
    return a + b;
  }, 0)
  var answer = function() {
    return sumArray
  }
  return answer();
}

// return the final answer with function
var answer = function(param) {
  return sumPrimes(param);
}

console.log(answer(2000000));
