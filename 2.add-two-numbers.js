/*
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (28.99%)
 * Total Accepted:    561.9K
 * Total Submissions: 1.9M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 * 
 * Example:
 * 
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0
    let curr = head = new ListNode(0)
    while (l1 && l2) {
        let val = l1.val + l2.val + carry
        carry = val >= 10 ? 1 : 0
        curr.next = new ListNode(val >= 10 ? val - 10 : val)
        curr = curr.next

        l1 = l1.next
        l2 = l2.next
    }

    let left = l1 || l2
    while(left) {
        let val = left.val + carry
        carry = val >= 10 ? 1 : 0
        curr.next = new ListNode(val >= 10 ? val - 10 : val)
        curr = curr.next

        left = left.next

    }
    if (carry) {
        curr.next = new ListNode(carry)
    }
    return head.next
};
// function print(l) {
//     let arr = []
//     while (l) {
//         arr.push(l.val)
//         l = l.next
//     }
//     arr = arr.reverse()
//     console.log(arr.join(""))
// }

// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }
// let l1 = new ListNode(0)
// let l2 = new ListNode(0)
// // print(addTwoNumbers(l1, l2))
// l1.next = new ListNode(1)
// // print(addTwoNumbers(l1, l2))
// l2.next = new ListNode(9)
// print(addTwoNumbers(l1, l2))
// l1.next.next = new ListNode(9)
// print(addTwoNumbers(l1, l2))
// l1.next.next.next = new ListNode(8)
// print(addTwoNumbers(l1, l2))
