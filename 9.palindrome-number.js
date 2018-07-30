/*
 * [9] Palindrome Number
 *
 * https://leetcode.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (37.45%)
 * Total Accepted:    365.5K
 * Total Submissions: 976K
 * Testcase Example:  '121'
 *
 * Determine whether an integer is a palindrome. An integer is a palindrome
 * when it reads the same backward as forward.
 * 
 * Example 1:
 * 
 * 
 * Input: 121
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it
 * becomes 121-. Therefore it is not a palindrome.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a
 * palindrome.
 * 
 * 
 * Follow up:
 * 
 * Coud you solve it without converting the integer to a string?
 * 
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false
    } else if ( x === 0) {
        return true
    } else {
        var len = Math.floor(Math.log10(x)) + 1
        while (len > 1) {
            x = cutFrontAndEndIfEqual(x, len)
            if (x !== false) {
                len -= 2
            } else {
                return false
            }
        }
        return true
    }
};

var cutFrontAndEndIfEqual = function(x, len) {
    var base10 = Math.pow(10, len - 1)
    var front = Math.floor(x / base10)
    x = x % base10

    var end = x % 10
    x = Math.floor(x / 10)
    return front === end ? x : false
}
