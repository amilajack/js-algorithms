// Write a function that returns how long it takes to enter a password into a
// 4 x 4 keypad, with a single finger.

// - The keypad layout is a square that has 4 rows and 4 columns of keys.
//   Each key is an alphanumeric character (letter or number).

// - Your finger starts at the first key of the password, so no time is spent
//   before pressing the first key

// - You can press a key instantly

// - It takes 1 second to move your finger from one key to an adjacent key,
//   including diagonally adjacent keys

// Here is a diagram that clarifies this visually:
// https://pasteboard.co/Ix5MttL.png

// Your function takes two inputs:
// - password: String to type into the keypad. Arbitrary length.
// - keypad: String of 16 digits where each group of 4 digits represents
//   a row on the keypad, in order. For example, 0123456789abcdef
//   represents the keypad:

// 0 1 2 3
// 4 5 6 7
// 8 9 a b
// c d e f

// Example:
// - entryTime("15ebb", "0123456789abcdef")
// - password: "15ebb"
// - keypad: "0123456789abcdef"

// 0 1 2 3
// 4 5 6 7
// 8 9 a b
// c d e f

// We calculate the time it takes to type password = 15ebb as follows:
// 1: We start at this key so it takes 0 seconds.
// 5: It takes 1 second to move from 1 -> 5
// e: It takes 2 seconds to move from 5 -> e
// b: It takes 1 second to move from e -> b
// b: It takes 0 seconds to move from b -> b
// The total time is 4.

// / create 2d grid/matrix
// distance = 0;
// for each entry
//   find indicies i, j (where in the click is)
//   run bfs, keep track of the distances
//   total += distance
// return distane

function createGrid(keypad) {
  const grid = new Array(4);
  for (let i = 0; i < 4; i++) {
    grid[i] = new Array(4);
  }
  let i = -1;
  for (let k = 0; k < 16; k++) {
    const j = k % 4;
    if (j === 0) {
      i++;
    }
    grid[i][j] = keypad[k];
  }
  return grid;
}

function findCords(grid, char) {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (grid[i][j] === char) return [i, j];
    }
  }
}

function bfs(grid, target, iInit, jInit) {
  const queue = [[iInit, jInit, 0]];
  const visited = new Set();
  while (queue.length) {
    const [i, j, d] = queue.shift();
    const key = [i, j].join('-');
    if (visited.has(key)) continue;
    visited.add(key);
    if (i < 0 || j < 0 || i >= 4 || j >= 4) continue;
    const item = grid[i][j];
    if (item === target) return d;

    queue.push([i - 1, j - 1, d + 1]);
    queue.push([i - 1, j, d + 1]);
    queue.push([i - 1, j + 1, d + 1]);

    queue.push([i + 1, j - 1, d + 1]);
    queue.push([i + 1, j, d + 1]);
    queue.push([i + 1, j + 1, d + 1]);

    queue.push([j, j - 1, d + 1]);
    queue.push([i, j + 1, d + 1]);
  }
}

function entryTime(password, keypad) {
  const grid = createGrid(keypad);
  let totalDist = 0;
  for (let i = 1; i < password.length; i++) {
    const [iFrom, jFrom] = findCords(grid, password[i - 1]);
    totalDist += bfs(grid, password[i], iFrom, jFrom);
  }
  return totalDist;
}

console.log(entryTime('15ebb', '0123456789abcdef'));
