/**
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
 *        Ex...  a**2 + b**2 = c**2
 * For example, 32 + 42 = 9 + 16 = 25 = 52.
 *  There exists exactly one Pythagorean triplet for which a + b + c = 1000.
    Find the product abc.
 */

let arrPythag = [];

for (var i = 1; i <= 1000; i++) {
  arrPythag.push(i);
}

let allTriplets = [];

for (var i = 0; i < arrPythag.length; i++) {
  for (var k = 0; k < arrPythag.length; k++) {
    for (var p = 0; p < arrPythag.length; p++) {
      let aSquared = Math.pow(arrPythag[i], 2);
      let bSquared = Math.pow(arrPythag[k], 2);
      let cSquared = Math.pow(arrPythag[p], 2);

      if (
        aSquared + bSquared == cSquared &&
        arrPythag[i] + arrPythag[k] + arrPythag[p] == 1000
      ) {
        allTriplets.push([arrPythag[i], arrPythag[k], arrPythag[p]]);
      }
    }
  }
}

console.log(allTriplets)
