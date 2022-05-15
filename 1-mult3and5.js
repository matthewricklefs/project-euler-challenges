function multiplesOf3And5(number) {
  // establish a global total and set initial value to 0
  let total = 0;

  // loop through all values from 0 to given number
  for (let i = 0; i < number; i++) {
    // check if remainder for 3 or 5
    if (i % 3 === 0 || i % 5 === 0) {
      // if true, i is a multiple of 3
      // add it to the total
      total += i;
    }
  }
  // return our total
  return total;
}

console.log(multiplesOf3And5(1000));

// create an array of 1000 numbers from 1 to 1000
const result = Array.from({ length: 1000 }, (x, y) => y++)
  // filter out multiples of 3 and 5
  .filter((number) => number % 5 === 0 || number % 3 === 0)
  .reduce((sum, number) => sum + number, 0);

console.log(result)
