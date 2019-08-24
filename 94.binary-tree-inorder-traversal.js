/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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
var inorderTraversal = function(root) {
  let curr = root // 未记录过的节点
  let result = []
  let rootStack = []  // 包含待记录的节点，顺序为访问的顺序

  while (curr || rootStack.length) {
    while (curr) {
      rootStack.push(curr)
      curr = curr.left
    }
    curr = rootStack.pop()
    result.push(curr.val)
    curr = curr.right
  }
  return result
};

// recursive version
// var inorderTraversal = function(root) {
//   if (!root) return []
//   return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
// };

