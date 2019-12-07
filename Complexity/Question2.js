let j;
let k = 0;
const n = Infinity;
for (let i = n / 2; i <= n; i++) {
  for (j = 2; j <= n; j *= 2) {
    k += n / 2;
  }
}
console.log(k, n);

// ANSWER: O(nLogn)
