/*
 * @lc app=leetcode id=222 lang=javascript
 *
 * [222] Count Complete Tree Nodes
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
var countNodes = function(root) {
  if (!root) return 0
  return countNodes(root.left) + countNodes(root.right) + 1
};

// var countNodes = function(root) {
//   if (!root) return 0
//   return countNodes(root.left) + countNodes(root.right) + 1
// };

