/*
 * [21] Merge Two Sorted Lists
 *
 * https://leetcode.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (42.44%)
 * Total Accepted:    381.2K
 * Total Submissions: 897.9K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * Merge two sorted linked lists and return it as a new list. The new list
 * should be made by splicing together the nodes of the first two lists.
 * 
 * Example:
 * 
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
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
var mergeTwoLists = function(l1, l2) {
    var head = new ListNode(0)
    var curr = head

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            curr.next = new ListNode(l1.val)
            l1 = l1.next
        } else {
            curr.next = new ListNode(l2.val)
            l2 = l2.next
        }
        curr = curr.next
    }
    curr.next = l1 || l2
    return head.next
};

// function ListNode(val) {
//     this.val = val;
//     this.next = null; 
// }

// l1 = new ListNode(1)
// l2 = new ListNode(2)
// console.log(mergeTwoLists(l1, l2))

// bad example!
// var mergeTwoLists = function(l1, l2) {
//     var head = new ListNode(0)
//     var curr = head.next

//     while (l1 && l2) {
//         if (l1.val <= l2.val) {
//             curr = new ListNode(l1.val)
//             l1 = l1.next
//         } else {
//             curr = new ListNode(l2.val)
//             l2 = l2.next
//         }
//         curr = curr.next
//     }
//     curr = l1 || l2
//     return head.next
// };