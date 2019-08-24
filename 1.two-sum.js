/*
 * [1] Two Sum
 *
 * https://leetcode.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (38.62%)
 * Total Accepted:    1M
 * Total Submissions: 2.6M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * Given an array of integers, return indices of the two numbers such that they
 * add up to a specific target.
 * 
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 * 
 * Example:
 * 
 * 
 * Given nums = [2, 7, 11, 15], target = 9,
 * 
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 * 
 * 
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = {}

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    let complement = target - num
    if (map[complement] !== undefined) return [map[complement], i]
    map[num] = i
  }
};

// console.log(twoSum([2, 7, 3], 9))

/**
 * Brute Force
 */
// var twoSum = function(nums, target) {
//     for (var i = 0, len = nums.length; i < len; ++i) {
//         let another = target - nums[i]
//         let candidates = nums.slice(i+1)

//         let j = candidates.indexOf(another)
//         if (j !== -1) {
//             return [i, j + i + 1]
//         }
//     }
// };
