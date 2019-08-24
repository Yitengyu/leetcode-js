/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  let curr = root
  let stack = []  // 准备调换左右的节点，当pop之时，就是调换之时
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr)
      curr = curr.left
    }
    curr = stack.pop()
    let right = curr.right
    curr.right = curr.left
    curr.left = right

    curr = curr.left
  }
  return root
};

// var invertTree = function(root) {
//   if (!root) return null
//   let left = invertTree(root.right)
//   root.right = invertTree(root.left)
//   root.left = left
//   return root
// };
