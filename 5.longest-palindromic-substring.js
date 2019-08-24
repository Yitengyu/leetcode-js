/*
 * [5] Longest Palindromic Substring
 *
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (25.62%)
 * Total Accepted:    357.2K
 * Total Submissions: 1.4M
 * Testcase Example:  '"babad"'
 *
 * Given a string s, find the longest palindromic substring in s. You may
 * assume that the maximum length of s is 1000.
 * 
 * Example 1:
 * 
 * 
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "cbbd"
 * Output: "bb"
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let result = ''
    s.split('').forEach((char, index) => {
      let subLongest = expandAroundCenter(s, index, index)
      if (result.length < subLongest.length) {
        result = subLongest
      }
      subLongest = expandAroundCenter(s, index, index + 1)
      if (result.length < subLongest.length) {
        result = subLongest
      }
    })
    return result
};

var expandAroundCenter = function (str, leftIndex, rightIndex) {
  while (str[leftIndex] && (str[leftIndex] === str[rightIndex])) {
    leftIndex--
    rightIndex++
  }
  return str.slice(leftIndex + 1, rightIndex)
}
