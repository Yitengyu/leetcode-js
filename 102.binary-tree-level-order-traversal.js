/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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
var levelOrder = function(root) {
    if (!root) return []
    let result = []
    let queue = [root]
    while (queue.length) {
      let nextQueue = []
      let row = []
      queue.forEach(node => {
        row.push(node.val)
        node.left && nextQueue.push(node.left)
        node.right && nextQueue.push(node.right)
      })
      result.push(row)
      queue = nextQueue
    }
    return result
};

