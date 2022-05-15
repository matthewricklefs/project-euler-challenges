/*
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
*/

const longestCollatzSequence = (limit) => {
  // length of longest sequence
  let longestSequence = 1;
  // keep track of the starting value of that longest sequence above
  let longestValue = 1;

  // iterating variable
  let startValue;
  for (startValue = 2; startValue < limit; startValue++) {
    let numberOfTerms = 1;
    let currentTerm = startValue;

    // build the chain
    while (currentTerm != 1) {
      if (currentTerm % 2 === 0) {
        currentTerm = currentTerm / 2;
      }
      // current term is odd not even
      else {
        currentTerm = 3 * currentTerm + 1;
      }
      // keeps track of # of terms generated
      // will continue until we reach one
      numberOfTerms = numberOfTerms + 1;
    }

    if (numberOfTerms > longestSequence) {
      console.log(
        'Numbers of terms for ' + startValue + ' is ' + numberOfTerms
      );
      longestSequence = numberOfTerms;
      longestValue = startValue;
    }
  }

  return longestValue;
};

console.log('Result is ', +longestCollatzSequence(5847));
console.log('Result is ', +longestCollatzSequence(100000));
console.log('Result is ', +longestCollatzSequence(1000000));
