/*
 * [28] Implement strStr()
 *
 * https://leetcode.com/problems/implement-strstr/description/
 *
 * algorithms
 * Easy (29.61%)
 * Total Accepted:    298.5K
 * Total Submissions: 1M
 * Testcase Example:  '"hello"\n"ll"'
 *
 * Implement strStr().
 * 
 * Return the index of the first occurrence of needle in haystack, or -1 if
 * needle is not part of haystack.
 * 
 * Example 1:
 * 
 * 
 * Input: haystack = "hello", needle = "ll"
 * Output: 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: haystack = "aaaaa", needle = "bba"
 * Output: -1
 * 
 * 
 * Clarification:
 * 
 * What should we return when needle is an empty string? This is a great
 * question to ask during an interview.
 * 
 * For the purpose of this problem, we will return 0 when needle is an empty
 * string. This is consistent to C's strstr() and Java's indexOf().
 * 
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let l1 = haystack.length
    let l2 = needle.length
    let res = l2 !== 0 ? -1 : 0

    if (l2 && l1 >= l2) {
        for (let i = 0; i <= l1 - l2; ++i) {
            let j = 0
            for (; j < l2; ++j) {
                if (haystack[i + j] !== needle[j]) {
                    break
                }
            }
            if (j === l2) {
                res = i
                break
            }
        }
    }

    return res
};
