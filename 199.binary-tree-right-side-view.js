/*
 * @lc app=leetcode id=199 lang=javascript
 *
 * [199] Binary Tree Right Side View
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
var rightSideView = function(root) {
  let rows = root ? getTreeRows(root) : []
  return rows.map(row => row.pop())
};

var getTreeRows = function (root) {
  let result = []
  let queue = [root]
  while (queue.length) {
    let nextQueue = []
    let currRow = []
    queue.forEach(node => {
      currRow.push(node.val)
      node.left && nextQueue.push(node.left)
      node.right && nextQueue.push(node.right)
    })

    result.push(currRow)
    queue = nextQueue
  }
  return result
}

// var rightSideView = function(root) {
//   let rows = getTreeRows(root)
//   return rows.map(row => row.pop())
// };

// var getTreeRows = function (root) {
//   return root
//   ? [[root.val], ...mergeTwoArrayInOrder(getTreeRows(root.left), getTreeRows(root.right))]
//   : []
// }

// function mergeTwoArrayInOrder (arr1, arr2) {
//   let result = []
//   for (let i = 0; i < arr1.length; i++) {
//     result.push(arr2[i] ? arr1[i].concat(arr2[i]) : arr1[i])
//   }
//   result = result.concat(arr2.slice(arr1.length))
//   return result
// }

