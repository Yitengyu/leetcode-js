/*
 * @lc app=leetcode id=179 lang=javascript
 *
 * [179] Largest Number
 */
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  if (nums.every(num => num === 0)) {
    return '0'
  }

  let sorted = nums.sort((a, b) => {
    if (a === b) return 0

    a = String(a).split('')
    b = String(b).split('')
    let i = 0, j = 0
    while (i !== a.length || j !== b.length) {
      i = i % a.length
      j = j % b.length
      if (a[i] !== b[j]) {
        return +a[i] - b[j]
      }
      i++
      j++
    }
    return 0
  })

  return sorted.reverse().join('')
};
