/*
 * @lc app=leetcode id=71 lang=javascript
 *
 * [71] Simplify Path
 */
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  let result = []
  path.split('/').forEach(item => {
    if (item === '..') result.pop()
    else if (item && item !== '.') result.push(item)
  })
  return '/' + result.join('/')
};
