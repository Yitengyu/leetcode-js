/*
 * @lc app=leetcode id=95 lang=javascript
 *
 * [95] Unique Binary Search Trees II
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    return n > 0 ? generateTreesWith(n, 1) : []
};

/**
 * @param {*} i 
 * @param {*} j 
 * i <= j
 */
var generateTreesWith = function (n, start) {
  if (n === 0) return [null]
  if (n === 1) return [new TreeNode(start)]

  let result = []
  for (let i = start; i < start + n; i++) {
    let leftTrees = generateTreesWith(i - start, start)
    let rightTrees = generateTreesWith(start + n - i - 1, i + 1)
    for (let x = 0; x < leftTrees.length; x++) {
      for (let y = 0; y < rightTrees.length; y++) {
        let root = new TreeNode(i)
        root.left = leftTrees[x]
        root.right = rightTrees[y]
        result.push(root)
      }
    }
  }

  return result
}

