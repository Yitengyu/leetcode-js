/*
 * @lc app=leetcode id=99 lang=javascript
 *
 * [99] Recover Binary Search Tree
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
var recoverTree = function(root) {
    let curr = root
    let stack = []
    let prev = firstToSwap = secondToSwap = null
    while (curr || stack.length) {
      while (curr) {
        stack.push(curr)
        curr = curr.left
      }
      curr = stack.pop()
      if (!prev) {
        prev = curr
      } else if (!firstToSwap && curr.val <= prev.val) {
        firstToSwap = prev
      }
      if (firstToSwap && curr.val <= firstToSwap.val) {
        // 这并不一定只执行一次
        secondToSwap = curr
      }
      prev = curr
      curr = curr.right
    }

    let firstVal = firstToSwap.val
    firstToSwap.val = secondToSwap.val
    secondToSwap.val = firstVal
    return root
};
