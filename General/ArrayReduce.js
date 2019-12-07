export default function reduce(fn, initialVal) {
  const items = this;
  let accum = typeof initialVal === 'undefined' ? items[0] : initialVal;
  for (let i = 0; i < this.length; i++) {
    if (typeof initialVal === 'undefined' && i === 0) continue;
    accum = fn(accum, items[i], i, this);
  }
  return accum;
}

Array.prototype.reduce = reduce; // eslint-disable-line no-extend-native

console.log([1, 2, 3].reduce((p, c) => p + c, 0));
console.log([1, 2, 10].reduce((p, c) => p + c));

const people = [
  { name: 'Mike', score: 21 },
  { name: 'Tracy', score: 23 },
  { name: 'Noah', score: 29 }
];
console.log(
  people.reduce((accumulator, person, index, _people) => {
    accumulator[person.name] = `${index + 1}/${_people.length} score: ${
      person.score
    }`;
    return accumulator;
  }, {})
);

// export function testReduce() {
//   // we have list of test cases, with expected outputs
//   for (const test of testCases) {
//     const [exp, arr, ...args] = test; // arr of test cases, [exp, arr, fn, intial val, index, arr]
//     // checks deep equality using jest
//     const actual = arr.call(arr, args);
//     if (actual === exp) {
//       console.log('✅', arr, ' passed');
//     } else {
//       console.log('error', `expected ${exp}, got ${JSON.stringify(actual)}`);
//     }
//   }
//   return true;
// }

// {Mike: "1/3 score: 21", Tracy: "2/3 score: 23", Noah: "3/3 score: 29"}
