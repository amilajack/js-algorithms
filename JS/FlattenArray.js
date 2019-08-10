// Flatten an array
//
// ex.
// input: [1, 2, '12', true, [1, 2, 3, []], {}]
// output: [1, 2, '12', ture, 1, 2, 3, {}]
export default function FlattenArray(array) {
  if (!Array.isArray(array)) return array;
  let res = [];
  for (const item of array) {
    if (Array.isArray(array)) {
      const rec = FlattenArray(array);
      res = res.concat(rec);
    } else {
      res.push(item);
    }
  }
  return res;
}
