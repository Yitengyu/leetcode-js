/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let num = +str
  if (num < -Math.pow(2, 31)) return -Math.pow(2, 31)
  if (num > Math.pow(2, 31)) return Math.pow(2, 31)
  return num
};

