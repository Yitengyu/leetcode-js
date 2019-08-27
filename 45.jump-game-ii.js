/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  if (nums.length <= 1) return 0

  let currStep = 0
  let currCandidates = [0]
  let maxReached = 0
  while (maxReached < nums.length - 1) {
    let maxReach = maxReached
    currCandidates.forEach(i => {
      maxReach = Math.max(i + nums[i], maxReach)
    })
    currCandidates = range(maxReached + 1, maxReach + 1)
    currStep++
    maxReached = maxReach
  }
  return currStep
};

var range = function (left, right) {
  let res = []
  for (let i = left; i < right; i++) {
    res.push(i)
  }
  return res
}
