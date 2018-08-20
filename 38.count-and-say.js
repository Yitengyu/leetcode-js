/*
 * [38] Count and Say
 *
 * https://leetcode.com/problems/count-and-say/description/
 *
 * algorithms
 * Easy (37.51%)
 * Total Accepted:    211.6K
 * Total Submissions: 563K
 * Testcase Example:  '1'
 *
 * The count-and-say sequence is the sequence of integers with the first five
 * terms as following:
 * 
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 * 
 * 
 * 
 * 1 is read off as "one 1" or 11.
 * 11 is read off as "two 1s" or 21.
 * 21 is read off as "one 2, then one 1" or 1211.
 * 
 * 
 * 
 * Given an integer n, generate the nth term of the count-and-say sequence.
 * 
 * 
 * 
 * Note: Each term of the sequence of integers will be represented as a
 * string.
 * 
 * 
 * Example 1:
 * 
 * Input: 1
 * Output: "1"
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: 4
 * Output: "1211"
 * 
 * 
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let curr = "1"
    let index = 1
    while (index !== n) {
        curr = sayIt(curr)
        index ++
    }
    return curr + ""
};

// n is string
var sayIt = function(n) {
    let res = []
    n = [].slice.call(n)
    let countingNum = n.pop()
    let count = 1
    while (n.length) {
        let curr = n.pop()
        if (curr == countingNum) {
            count ++
        } else {
            res.push(countingNum)
            res.push(count)
            countingNum = curr
            count = 1
        }
    }
    res.push(countingNum)
    res.push(count)
    return res.reverse().join('')
}
