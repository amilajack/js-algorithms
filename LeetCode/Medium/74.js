const binSearch = (nums, target) => {
  let lo = 0;
  let hi = nums.length - 1;
  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (nums[mid] === target) return true;
    if (nums[mid] < target) lo = mid + 1;
    else hi = mid;
  }
  return nums[lo] === target;
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
export default function searchMatrix(matrix, target) {
  if (matrix.length === 0) return false;
  let lo = 0;
  let hi = matrix.length - 1;
  while (lo < hi) {
    // Search the middle row
    const mid = Math.floor((lo + hi) / 2);
    // If # is in range of the row then bin search row
    if (matrix[mid].length === 0) return false;
    if (
      matrix[mid][0] <= target &&
      target <= matrix[mid][matrix[mid].length - 1]
    ) {
      return binSearch(matrix[mid], target);
    }
    if (matrix[mid][0] > target) {
      // if less than range, search rows between middle row and first row
      hi = mid - 1;
    } else {
      // search rows between middle row and last row
      lo = mid + 1;
    }
    if (hi < lo) return false;
    if (lo === hi) return binSearch(matrix[lo], target);
  }
  if (lo === hi) return binSearch(matrix[lo], target);
  return false;
}
