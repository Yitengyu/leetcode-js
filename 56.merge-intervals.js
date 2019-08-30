/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  let sorted = intervals.sort((a, b) => a[0] - b[0])
  let result = []
  let curr = sorted.shift()
  while (curr) {
    let next = sorted.shift()
    if (!next) {
      result.push(curr)
      return result
    } else if (curr[1] < next[0]) {
      result.push(curr)
      curr = next
    } else if (curr[1] >= next[1]) {
      continue
    } else {
      curr = [curr[0], next[1]]
    }
  }
  return result
};

// console.log(merge([[2,6],[1,3],[8,10],[15,18]]))

