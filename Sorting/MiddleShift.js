/**
 * Add a number to the middle of an array
 *
 * Solution: Find the index closest to the 'middle' of an array. Then add the
 *           elements that follow it to separate
 *
 * Complexity: O((n/2)^2)
 */
const expect = require('chai').expect


function SlowMiddleShift(string, char) {
  const round = Math.floor(string.length / 2)
  let formatted = string.substring(0, round)

  // BAD
  // O((n/2)^2)
  formatted += char

  for (let i = round; i < string.length; i++) {
    formatted += string[i];
  }

  return formatted
}

function FastMiddleShift(string, char) {
  const round = Math.floor(string.length / 2)

  
}

expect(SlowMiddleShift('some', 'e')).to.equal('soeme')
