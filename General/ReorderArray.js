// We have an array of objects A and an array of indexes B. Reorder objects in array A with given indexes in array B. Do not change array A's length.

// example:
// const A = [C, D, E, F, G];
// const B = [3, 0, 4, 1, 2];

// sort(A, B);
// // A is now [D, F, G, C, E];

// [C, D, E, F, G];
// [3, 0, 4, 1, 2];

// [F, D, E, C, G];
// [1, 0, 4, 3, 2];

// [D, F, E, C, G];
// [0, 1, 4, 3, 2];

// [D, F, G, C, E];
// [0, 1, 2, 3, 4];

function swap(array, from, to) {
  const tmp = array[from];
  array[from] = array[to];
  array[to] = tmp;
}

function reorderArray(A, B) {
  for (let i = 0; i < A.length; i++) {
    const to = B[i];
    swap(A, i, to);
    swap(B, i, to);
  }
  return A;
}

const A = ['C', 'D', 'E', 'F', 'G'];
const B = [3, 0, 4, 1, 2];

console.log(reorderArray(A, B));
