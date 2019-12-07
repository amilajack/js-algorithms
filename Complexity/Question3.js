let a = 0;
let i = Infinity;
while (i > 0) {
  a += i;
  i /= 2;
}
console.log(a);
// ANSWER: O(Logn)
