// 1. Two Sum

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export default function twoSum(list, target) {
  const map = new Map();

  for (let i = 0; i < list.length; i++) {
    if (map.has(list[i])) {
      const curr = map.get(list[i]);
      curr.push(i);
    } else {
      map.set(list[i], [i]);
    }
  }

  for (let i = 0; i < list.length; i++) {
    const res = target - list[i];
    if (map.has(res)) {
      if (res === list[i]) {
        if (map.get(res).length > 1) {
          const indexes = map.get(res);
          return [indexes[0], indexes[1]].sort((a, b) => a - b);
        }
      } else {
        return [map.get(res)[0], map.get(list[i])[0]].sort((a, b) => a - b);
      }
    }
  }

  return [];
}
