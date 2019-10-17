export default function RREF(A) {
  const rows = A.length;
  const columns = A[0].length;

  let lead = 0;
  for (let k = 0; k < rows; k++) {
    if (columns <= lead) return;

    let i = k;
    while (A[i][lead] === 0) {
      i++;
      if (rows === i) {
        i = k;
        lead++;
        if (columns === lead) return;
      }
    }
    const irow = A[i];
    const krow = A[k];
    A[i] = krow;
    A[k] = irow;

    let val = A[k][lead];
    for (let j = 0; j < columns; j++) {
      A[k][j] /= val;
    }

    for (let i = 0; i < rows; i++) {
      if (i === k) continue;
      val = A[i][lead];
      for (let j = 0; j < columns; j++) {
        A[i][j] -= val * A[k][j];
      }
    }
    lead++;
  }
  return A;
}
