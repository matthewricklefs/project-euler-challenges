/**
 * Sum square difference
 * The sum of the squares of the first ten natural numbers is,
 *      1**2 + 2**2 + .... + 10**2 = 385
 * The square of the sum of the first ten natural numbers is,
 *      (1 + 2 + ... + 10)**2 = 55**2 = 3025
 * Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is
 *      3025 - 385 = 2640.
 *  Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 */

// functional programming and recursion
// Recursion:
//

function getSumSquares(ceiling, total = 0) {
  if (ceiling === 0) {
    return total;
  }
  let squared = (total += ceiling ** 2);
  return getSumSquares(ceiling - 1, total);
}

function getSquareSum(ceiling, total = 0) {
  if (ceiling === 0) {
    return total ** 2;
  }
  total += ceiling;
  return getSquareSum(ceiling - 1, total);
}

function sumSquareDifference(n) {
  let sumOfSquares = getSumSquares(n);
  let squareOfSum = getSquareSum(n);
  
  return squareOfSum - sumOfSquares;
}

console.log(sumSquareDifference(100));
