/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let result = []
  if (nums.length < 2) return [nums]

  nums.forEach((num, index) => {
    let afterRemove = [...nums.slice(0, index), ...nums.slice(index + 1, nums.length)]
    permute(afterRemove).forEach(item => {
      result.push([num, ...item])
    })
  })
  return result
};


