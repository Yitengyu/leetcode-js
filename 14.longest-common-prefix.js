/*
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (31.78%)
 * Total Accepted:    302.2K
 * Total Submissions: 950.8K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 * 
 * If there is no common prefix, return an empty string "".
 * 
 * Example 1:
 * 
 * 
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 * 
 * 
 * Note:
 * 
 * All given inputs are in lowercase letters a-z.
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var res = false
    strs.forEach(function(str) {
        res = res === false ? str : commonPrefix(res, str)
    })
    return res === false ? '' : res
};

var commonPrefix = function(str1, str2) {
    var res = ''
    for (var i = 0, l1 = str1.length, l2 = str2.length; i < l1 && i < l2 ; ++i) {
        if (str1[i] === str2[i]) {
            res += str1[i]
        } else {
            break;
        }
    }
    return res
}
