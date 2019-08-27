/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if (nums.length <= 1) return true
    if (nums[0] === 0) return false

    let leftMostGoodIndex = nums.length - 1
    for (let i = nums.length - 2; i >= 0; i--) {
      if (i + nums[i] >= leftMostGoodIndex) {
        leftMostGoodIndex = i
        // console.log(leftMostGoodIndex)
      }
    }

    return leftMostGoodIndex === 0
};

// console.log(canJump([2,3,1,1,4]))

// console.log(canJump([0]))
// console.log(canDirectJumpFrom([2, 3, 1, 1, 4], 1, 4))

