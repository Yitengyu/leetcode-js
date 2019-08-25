/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
 * @return {boolean}
 */
var isValidBST = function(root) {
  let curr = root
  let stack = []
  let lastVal = null
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr)
      curr = curr.left
    }

    curr = stack.pop()
    if (lastVal === null) {
      lastVal = curr.val
    } else if (lastVal >= curr.val) {
      return false
    } else {
      lastVal = curr.val
    }
    curr = curr.right
  }

  return true
};

