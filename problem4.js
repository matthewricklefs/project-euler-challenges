/**
 * Largest Palindrome Product
 * A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

function palindromic() {
  var max = 0;
  for (var i = 999; i > 99; i--) {
    for (var k = 999; k > 99; k--) {
      var n = i * k;
      var s = "" + n;
      if (s === s.split("").reverse().join("") && n > max) {
        max = n;
      }
    }
  }
  return max;
}
console.log(palindromic());
