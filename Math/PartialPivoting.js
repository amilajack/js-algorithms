const MatrixUtil = (function() {
  const Identity = function(dim) {
    const I = [];

    let i;
    let j;
    for (i = 0; i < dim; i++) {
      const r = [];

      for (j = 0; j < dim; j++) {
        r.push(i == j ? 1 : 0);
      }

      I.push(r);
    }

    return I;
  };

  const Clone = function(M) {
    const C = [];
    let i;
    let j;

    const rc = M.length;
    for (i = 0; i < rc; i++) {
      const m = M[i];
      const r = [];

      const cc = m.length;
      for (j = 0; j < cc; j++) {
        r.push(m[j]);
      }

      C.push(r);
    }

    return C;
  };

  const Transpose = function(M) {
    const C = [];
    let i;
    let j;

    const rc = M.length;
    const cc = M[0].length;

    for (i = 0; i < cc; i++) {
      const r = [];

      for (j = 0; j < rc; j++) {
        r.push(M[j][i]);
      }

      C.push(r);
    }

    return C;
  };

  const Sum = function(A, B) {
    const C = [];
    let i;
    let j;

    const rc = A.length;
    const cc = A[0].length;

    for (i = 0; i < rc; i++) {
      const r = [];

      for (j = 0; j < cc; j++) {
        r.push(A[i][j] + B[i][j]);
      }

      C.push(r);
    }

    return C;
  };

  const Subtract = function(A, B) {
    const C = [];
    let i;
    let j;

    const rc = A.length;
    const cc = A[0].length;
    for (i = 0; i < rc; i++) {
      const r = [];

      for (j = 0; j < cc; j++) {
        r.push(A[i][j] - B[i][j]);
      }

      C.push(r);
    }

    return C;
  };

  const Multiply = function(A, B) {
    const C = [];

    const rCount = A.length;
    const cCount = B[0].length;

    let i;
    let j;
    let k;
    for (i = 0; i < rCount; i++) {
      const r = [];
      const ra = A[i];

      for (j = 0; j < cCount; j++) {
        let cell = 0;
        for (k = 0; k < rCount; k++) {
          cell += ra[k] * B[k][j];
        }

        r.push(cell);
      }

      C.push(r);
    }

    return C;
  };

  const Round = function(M, decimal) {
    const C = [];

    const rc = M.length;
    const cc = M[0].length;

    let i;
    let j;
    for (i = 0; i < rc; i++) {
      const r = [];
      const rm = M[i];

      for (j = 0; j < cc; j++) {
        r.push(Number(rm[j].toFixed(decimal)));
      }

      C.push(r);
    }

    return C;
  };

  return {
    Identity,
    Clone,
    Transpose,
    Sum,
    Subtract,
    Multiply,
    Round
  };
})();

const LU = function() {
  const self = this;

  const getMaxEntry = function(cIdex) {
    const { U } = self;
    let maxIdex = cIdex;
    let max = Math.abs(U[cIdex][cIdex]);
    const dim = A.length;
    let i;

    for (i = cIdex + 1; i < dim; i++) {
      const next = Math.abs(U[i][cIdex]);
      if (next > max) {
        max = next;
        maxIdex = i;
      }
    }

    return maxIdex;
  };

  const pivot = function(p, n) {
    const dim = self.A.length;
    const { U } = self;
    const { L } = self;
    const { P } = self;

    let temp;
    let i;
    // U
    for (i = p; i < dim; i++) {
      temp = U[p][i];
      U[p][i] = U[n][i];
      U[n][i] = temp;
    }

    // L
    for (i = 0; i < p; i++) {
      temp = L[p][i];
      L[p][i] = L[n][i];
      L[n][i] = temp;
    }

    // P
    temp = P[p];
    P[p] = P[n];
    P[n] = temp;
  };

  const eliminate = function(p) {
    const dim = self.A.length;
    const { U } = self;
    const { L } = self;
    let i;
    let j;

    for (i = p + 1; i < dim; i++) {
      const l = U[i][p] / U[p][p];
      L[i][p] = l;

      for (j = p; j < dim; j++) {
        U[i][j] = U[i][j] - l * U[p][j];
      }
    }
  };

  const setA = function(A) {
    // A is a square matrix
    const dim = A.length;

    self.A = A;
    self.U = MatrixUtil.Clone(A);
    self.L = MatrixUtil.Identity(dim);
    self.P = MatrixUtil.Identity(dim);

    return self;
  };

  const PLU = function() {
    const { A } = self;
    const dim = A.length;

    let i;
    let j;
    let k;
    for (i = 0; i < dim - 1; i++) {
      // Find the max entry
      const maxIdex = getMaxEntry(i);

      // Pivoting
      if (i != maxIdex) {
        pivot(i, maxIdex);
      }

      // Eliminate
      eliminate(i);
    }
  };

  const solve = function(B) {
    const dim = self.A.length;
    const { P } = self;
    const { L } = self;
    const { U } = self;

    const PB = MatrixUtil.Multiply(P, B);

    let i;
    let j;

    // LUX = PB
    // UX = Y ==> LY = PB
    const Y = [];
    for (i = 0; i < dim; i++) {
      const l = L[i];

      let temp = 0;
      for (j = 0; j < i; j++) {
        temp += l[j] * Y[j][0];
      }

      Y.push([PB[i][0] - temp]);
    }

    // UX = Y
    const X = [];
    for (i = dim - 1; i >= 0; i--) {
      const u = U[i];

      const start = i + 1;
      let temp = 0;
      for (j = start; j < dim; j++) {
        temp += u[j] * X[j - start];
      }

      X.unshift([(Y[i][0] - temp) / u[i]]);
    }

    return X;
  };

  // Public methods
  self.SetA = setA;
  self.PLU = PLU;
  self.Solve = solve;
};

const lu = new LU().SetA(A);
lu.PLU();
const X = lu.Solve(state.B);
