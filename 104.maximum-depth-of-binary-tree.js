/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
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
 * @return {number}
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  let max = 0
  let curr = root
  let stack = []
  let depthStack = []
  let currDepth = 0
  while (curr || stack.length) {
      while (curr) {
          stack.push(curr)
          currDepth++
          depthStack.push(currDepth)
          curr = curr.left
      }
      curr = stack.pop()
      currDepth = depthStack.pop()
      max = Math.max(max, currDepth)
      curr = curr.right
  }
  return max
};
