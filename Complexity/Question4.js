let a = 0;
for (i = 0; i < N; i++) {
  for (j = 0; j < N; j++) {
    for (k = 0; k < N; k++) {
      a = a + i + j;
    }
  }
}

// ANSWER: O(N^3)
