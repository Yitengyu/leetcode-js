/*
 * @lc app=leetcode id=145 lang=javascript
 *
 * [145] Binary Tree Postorder Traversal
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
var postorderTraversal = function(root) {
  let curr = root
  let result = []
  let stack = []

  while (curr || stack.length) {
    while (curr) {
      stack.push(curr)
      result.push(curr.val)
      curr = curr.right
    }
    curr = stack.pop()
    curr = curr.left
  }
  return result.reverse()
};

// var postorderTraversal = function(root) {
//   if (!root) return []
//   return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val]
// };

