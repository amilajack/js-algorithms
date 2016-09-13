/**
 * Take a two dimentional array (array of arrays) and 'flatten' it. In other
 * words, this means to take multiple arrays and merge them together
 *
 * Javascript's Array.prototype.concat would make this easier but it creates a
 * new array every single time
 *
 * Complexity: O(n^2)
 */
const expect = require('chai').expect


function Flatten(twoDimentionalArray, collector = []) {
  switch (twoDimentionalArray.length > 0) {
    case true:
      // ES5
      // const first = twoDimentionalArray[0];
      // const rest = twoDimentionalArray.splice(1);
      const [first, ...rest] = twoDimentionalArray
      // ES5
      // return Flatten(rest, first.concat(collector))
      return Flatten(rest, [...first, ...collector])
    default:
      return collector
  }
}

expect(
  Flatten([[1, 3, 4, 5], [13, 15, 41, 54,]])
    .sort((a, b) => (a < b ? )
)
  .to.eql([1, 3, 4, 5, 13, 15, 41, 54])
