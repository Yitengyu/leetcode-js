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
      let subLongest = getPalindromeLengthByCenter(s, index)
      if (result.length < subLongest.length) {
        result = subLongest
      }
      subLongest = getPalindromeLengthByCenter(s, index + 0.5)
      if (result.length < subLongest.length) {
        result = subLongest
      }
    })
    return result
};

var getPalindromeLengthByCenter = function (str, centerIndex) {
  let offset = 1
  let leftIndex, rightIndex
  if (centerIndex * 2 % 2 === 0) {
    leftIndex = () => centerIndex - offset
    rightIndex = () => centerIndex + offset

  } else {
    leftIndex = () => centerIndex - offset + 0.5
    rightIndex = () => centerIndex + offset - 0.5
  }

  while (str[leftIndex()] && (str[leftIndex()] === str[rightIndex()])) {
    offset++
  }
  offset -= 1
  return str.slice(leftIndex(), rightIndex() + 1)
}

// console.log(longestPalindrome('122442'))
