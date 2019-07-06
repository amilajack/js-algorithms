let a = 0;
const N = Infinity;
for (let i = 0; i < N; i++) {
  for (let j = N; j > i; j--) {
    a = a + i + j;
  }
}

// ANSWER: O(n^2)
