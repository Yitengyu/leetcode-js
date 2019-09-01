/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if (!root) return []
  let result = []
  let queue = [root]
  let zig = true
  while (queue.length) {
    let nextQueue = []
    let row = []
    queue = zig ? queue : queue.reverse()
    queue.forEach(node => {
      row.push(node.val)
      if (zig) {
        node.left && nextQueue.push(node.left)
        node.right && nextQueue.push(node.right)
      } else {
        node.right && nextQueue.unshift(node.right)
        node.left && nextQueue.unshift(node.left)
      }
    })
    result.push(row)
    queue = nextQueue
    zig = !zig
  }
  return result
};

