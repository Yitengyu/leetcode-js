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
  let curr = root // 当前经过的节点
  let result = []
  let rootStack = []  // 包含未记录的父节点

  while (curr) {
    if (curr.isVisited) {
      result.push(curr.val)
      curr = curr.right || rootStack.pop()
    } else {
      rootStack.push(curr)
      curr.isVisited = true

      while (curr.left) {
        curr = curr.left
        curr.isVisited = true
        rootStack.push(curr)
      }
      curr = rootStack.pop()
    }
  }
  return result
};

// recursive version
// var inorderTraversal = function(root) {
//   if (!root) return []
//   return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
// };

