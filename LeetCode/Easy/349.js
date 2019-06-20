// 349. Intersection of Two Arrays
// Given two arrays, write a function to compute their intersection.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
export default function intersection(nums1, nums2) {
  const a = new Set(nums1);
  const b = new Set(nums2);
  const inters = [];
  for (const x of a) {
    if (b.has(x)) inters.push(x);
  }
  return inters;
}
