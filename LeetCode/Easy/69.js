/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function(x) {
  if (x === 1) return 1;
  let min = 0;
  let max = parseInt(x / 2);
  let mid = parseInt((max + min) / 2);
  let ans;
  while (!ans) {
    if (mid ** 2 === x) {
      return mid;
    }
    if (mid ** 2 < x) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
    if (min === max) return min;
    if (min + 1 === max && min ** 2 < x && max ** 2 > x) return min;
    if (mid === parseInt((max + min) / 2)) return mid;
    mid = parseInt((max + min) / 2);
  }
  return ans;
};
