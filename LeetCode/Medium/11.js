// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

// Note: You may not slant the container and n is at least 2.

/**
 * @param {number[]} height
 * @return {number}
 */
export default function maxArea(height) {
  let width = height.length - 1;
  let lo = 0;
  let hi = height.length - 1;
  let max = 0;
  while (lo < hi) {
    const loVal = height[lo];
    const hiVal = height[hi];
    max = Math.max(max, width * Math.min(hiVal, loVal));
    if (loVal < hiVal) {
      lo++;
    } else {
      hi--;
    }
    width--;
  }
  return max;
}
