/*
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (24.37%)
 * Total Accepted:    446.5K
 * Total Submissions: 1.8M
 * Testcase Example:  '123'
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 
 * Example 1:
 * 
 * 
 * Input: 123
 * Output: 321
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: -123
 * Output: -321
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 120
 * Output: 21
 * 
 * 
 * Note:
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of
 * this problem, assume that your function returns 0 when the reversed integer
 * overflows.
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (!inRange(x)) {
        return 0
    } else {
        var sign = getSign(x)
        x = Math.abs(x)
        var reverse = 0
        while(x) {
            reverse = reverse * 10 + x % 10
            x = Math.floor(x/10)
        }
        reverse = sign == 1 ? -reverse : reverse

        return inRange(reverse) ? reverse : 0
    }
};

var inRange = function(x) {
    var range = Math.pow(2, 31)
    return x >= - range && x < range
}

var getSign = function(x) {
    return x < 0 ? 1 : 0
}
