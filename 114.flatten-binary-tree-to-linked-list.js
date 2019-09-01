/*
 * @lc app=leetcode id=114 lang=javascript
 *
 * [114] Flatten Binary Tree to Linked List
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    let head = prevLink = null
    let curr = root
    let stack = []
    while (curr || stack.length) {
      while (curr) {
        if (prevLink) {
          prevLink.next = curr
        } else {
          head = curr
        }
        prevLink = curr
        stack.push(curr)
        curr = curr.left
      }

      curr = stack.pop()
      curr = curr.right
    }
    curr = head
    while (curr) {
      curr.right = curr.next
      curr.left = null
      curr = curr.next
    }
    return head
};
