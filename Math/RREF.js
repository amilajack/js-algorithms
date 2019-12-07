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

    for (let z = 0; z < rows; z++) {
      if (z === k) continue;
      val = A[z][lead];
      for (let j = 0; j < columns; j++) {
        A[z][j] -= val * A[k][j];
      }
    }
    lead++;
  }
  return A;
}
