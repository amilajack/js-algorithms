// 832. Flipping an Image

// Given a binary matrix A, we want to flip the image horizontally, then invert it, and return the resulting image.

// To flip an image horizontally means that each row of the image is reversed.  For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].

// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [0, 1, 1] results in [1, 0, 0].

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
export default function flipAndInvertImage(A) {
  // Take the transpose of the matrix
  for (let i = 0; i < A.length; i++) {
    // Flip each row
    for (let j = 0; j < Math.floor(A[i].length / 2); j++) {
      const a = A[i][j];
      const b = A[i][A[i].length - 1 - j];
      A[i][j] = b === 0 ? 1 : 0;
      A[i][A[i].length - 1 - j] = a === 0 ? 1 : 0;
    }
    if (A[i].length % 2 !== 0) {
      A[i][Math.floor(A[i].length / 2)] =
        A[i][Math.floor(A[i].length / 2)] === 0 ? 1 : 0;
    }
  }
  return A;
}
