/*
 * @lc app=leetcode id=400 lang=javascript
 *
 * [400] Nth Digit
 */
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    let len = 1
    let base = 0
    while (base + len * 9 * Math.pow(10, len - 1) < n) {
      base += len * 9 * Math.pow(10, len - 1)
      len++
    }
    let distance = n - base - 1

    let prior = distance % len + 1
    let circle = len * Math.pow(10, len - prior)
    
    let result = (prior === 1 ? 1 : 0) + Math.floor(distance / circle) % 10
    return result
};
