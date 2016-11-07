// Validate if a board is invald
const { expect } = require('chai');

const no = [
  [1, 4, 2, 6, 7, 2, 6, 7, 7],
  [1, 4, 1, 6, 7, 2, 6, 7, 7],
  [1, 4, 1, 6, 7, 2, 6, 7, 7],
  [1, 4, 1, 6, 7, 2, 6, 7, 7],
  [1, 4, 1, 6, 7, 2, 6, 7, 7],
  [1, 4, 1, 6, 7, 2, 6, 7, 7],
  [1, 4, 1, 6, 7, 2, 6, 7, 7],
  [1, 4, 1, 6, 7, 2, 6, 7, 7],
  [1, 4, 1, 6, 7, 2, 6, 7, 7]
];

const some = [
  [0, 0], [1, 0], [2, 0],
  [0, 1], [1, 1], [2, 1],
  [0, 2], [1, 2], [2, 2]
];

function flatten(array) {
  return array.reduce((prev, next) => [...prev, ...next], []);
}

function dupeRight(array) {
  return array.map(each => [each[0] + 3, each[1]]);
}

function dupeBottom(array) {
  return array.map(each => [each[0], each[1] + 3]);
}

/**
 * @complexity Time Compexity: O(n^2)
 *             where n is the number of rows of the board
 * @param {number}
 */
function dupe(rowCount = 3) {
  const items = [];

  items.push(some);

  for (let start = 0; start < rowCount; start++) {
    for (let inner = 0; inner < rowCount; inner++) {
      if (start === 0 && inner === 0) {
        continue;
      }

      if (items.length % 3 === 0) {
        items.push(dupeBottom(items[items.length - 3]));
        continue;
      }

      items.push(dupeRight(items[items.length - 1]));
    }
  }

  return items;
}

//
// Tests
//

// Test dupeRight
expect(dupeRight(some)).to.eql([
  [3, 0], [4, 0], [5, 0],
  [3, 1], [4, 1], [5, 1],
  [3, 2], [4, 2], [5, 2]
]);

// Test dupeBottom
expect(dupeBottom(some)).to.eql([
  [0, 3], [1, 3], [2, 3],
  [0, 4], [1, 4], [2, 4],
  [0, 5], [1, 5], [2, 5]
]);

// Test flatten
expect(flatten([[1, 3], [6, 5]])).to.eql([1, 3, 6, 5]);

const loo = dupe();
let hasDupe = false;

loo.every(e => {
  const doo = new Set();

  e.every(item => {
    const x = item[0];
    const y = item[1];

    if (doo.add(no[y][x])) {
      hasDupe = true;
      return false;
    }

    doo.add(no[y][x]);
  });

  return hasDupe;
});

console.log(hasDupe);
