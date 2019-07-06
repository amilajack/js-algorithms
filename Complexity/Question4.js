let a = 0;
const N = Infinity;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < N; k++) {
      a = a + i + j;
    }
  }
}

// ANSWER: O(N^3)
