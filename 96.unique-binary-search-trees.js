/*
 * @lc app=leetcode id=96 lang=javascript
 *
 * [96] Unique Binary Search Trees
 */
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    if (n === 0 || n === 1) return 1
    let record = [1, 1]
    let i = 2
    while (i <= n) {
      let j = 0
      let result = 0
      while (j < i) {
        result += record[j] * record[i - j - 1]
        j++
      }
      record[i] = result
      i++
    }
    return record[n]
};

