// 912. Sort an Array

// Given an array of integers nums, sort the array in ascending order.

// Example 1:

// Input: [5,2,3,1]
// Output: [1,2,3,5]
// Example 2:

// Input: [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]

// Note:

// 1 <= A.length <= 10000
// -50000 <= A[i] <= 50000

const merge = (left, right) => {
  const merged = [];
  let leftI = 0;
  let rightI = 0;

  while (merged.length < left.length + right.length) {
    if (leftI === left.length) {
      merged.push(right[rightI]);
      rightI++;
    } else if (rightI === right.length) {
      merged.push(left[leftI]);
      leftI++;
    } else if (left[leftI] < right[rightI]) {
      merged.push(left[leftI]);
      leftI++;
    } else {
      merged.push(right[rightI]);
      rightI++;
    }
  }

  return merged;
};

const mergeSort = arr => {
  // console.log(arr)
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
export default function sortArray(nums) {
  return mergeSort(nums);
}
