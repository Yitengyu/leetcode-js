/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
var isBalanced = function(root) {
    if (!root) return true
    let depthDiff = (maxDepth(root.left) - maxDepth(root.right))
    return Math.abs(depthDiff) <= 1 && isBalanced(root.left) && isBalanced(root.right)
};

