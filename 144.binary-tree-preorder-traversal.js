/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  let curr = root
  let stack = []
  let result = []
  while (curr || stack.length) {
    while (curr) {
      result.push(curr.val)
      stack.push(curr)
      curr = curr.left
    }
    curr = stack.pop()
    curr = curr.right
  }
  return result
};

// var preorderTraversal = function(root) {
//   if (!root) return []
//   return [
//     root.val,
//     ...preorderTraversal(root.left),
//     ...preorderTraversal(root.right)]
// };

