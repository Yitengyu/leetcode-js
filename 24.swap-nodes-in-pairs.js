/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (head && head.next) {
    let next = head.next
    head.next = swapPairs(next.next)
    next.next = head

    return next
  }
  return head
};

// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }

// let head = new ListNode(1)
// head.next = new ListNode(2)
// head.next.next = new ListNode(3)
// head.next.next.next = new ListNode(4)

// console.log(swapPairs(head))
