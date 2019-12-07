// Add the mathematical operators + or - before any of the digits in the decimal
// numeric string 123456789 such that the resulting mathematical expression adds
// up to 100. Return all possible solutions.

// There are 12 solutions:

// 1+2+3-4+5+6+78+9
// 1+2+34-5+67-8+9
// 1+23-4+5+6+78-9
// 1+23-4+56+7+8+9
// 12+3+4+5-6-7+89
// 12+3-4+5+67+8+9
// 12-3-4+5-6+7+89
// 123+4-5+67-89
// 123+45-67+8-9
// 123-4-5-6-7+8-9
// 123-45-67+89
// -1+2-3+4+5+6+78+9

function sumTo100Aux(n, digits, i, sumSoFar, res) {
  if (digits.length === 9) {
    const a = digits.join('');
    if (Number(a) === n) {
      res.push(a);
    }
    return;
  }
  sumTo100Aux(n, [...digits, `-${i}`], i + 1, sumSoFar, res);
  sumTo100Aux(n, [...digits, i], i + 1, sumSoFar, res);
  sumTo100Aux(n, [...digits, `+${i}`], i + 1, sumSoFar, res);
}

export default function sumTo100(n) {
  const res = [];
  sumTo100Aux(n, [], 1, 0, res);
  return res;
}

console.log(sumTo100(100));
