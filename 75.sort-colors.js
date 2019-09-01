/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let zeroCheck = 0
  let twoCheck = nums.length - 1
  for (let i = 0; i <= twoCheck; i++) {
    if (nums[i] === 2) {
      while (nums[twoCheck] === 2) {
        if (i === twoCheck) {
          return
        }
        twoCheck--
      }
      swap(nums, i, twoCheck--)
    }
    if (nums[i] === 0) {
      if (i === zeroCheck) {
        zeroCheck++
        continue
      } else {
        swap(nums, i, zeroCheck++)
      }
    }
  }
  // return nums
};

var swap = function (nums, i, j) {
  [nums[i], nums[j]] = [nums[j], nums[i]]
}

// console.log(sortColors([]))

