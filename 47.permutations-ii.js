/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let result = []
  if (nums.length < 2) return [nums]
  let memo = {}

  nums.forEach((num, index) => {
    if (memo[num]) return
    memo[num] = true
  
    let afterRemove = [...nums.slice(0, index), ...nums.slice(index + 1, nums.length)]
    permuteUnique(afterRemove).forEach(item => {
      result.push([num, ...item])
    })
  })
  return result
};
