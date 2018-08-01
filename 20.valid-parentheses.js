/*
 * [20] Valid Parentheses
 *
 * https://leetcode.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (34.36%)
 * Total Accepted:    369.7K
 * Total Submissions: 1.1M
 * Testcase Example:  '"()"'
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 * 
 * An input string is valid if:
 * 
 * 
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * 
 * 
 * Note that an empty string is also considered valid.
 * 
 * Example 1:
 * 
 * 
 * Input: "()"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "()[]{}"
 * Output: true
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "(]"
 * Output: false
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: "([)]"
 * Output: false
 * 
 * 
 * Example 5:
 * 
 * 
 * Input: "{[]}"
 * Output: true
 * 
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var res = true
    var stack = []
    Array.prototype.forEach.call(s, function(c) {
        if (stack.length === 0) {
            stack.push(c)
        } else {
            if (!matchParenthesis(stack[stack.length - 1], c)) {
                stack.push(c)
            } else {
                stack.pop()
            }
        }
    })
    return stack.length === 0
};

var matchParenthesis = function(c1, c2) {
    var MATCH = {
        '[': ']',
        '(': ')',
        '{': '}'
    }
    return MATCH[c1] === c2
}
// console.log(isValid(''))
// console.log(isValid('[]'))
// console.log(isValid('[(]'))
// console.log(isValid('[()]'))