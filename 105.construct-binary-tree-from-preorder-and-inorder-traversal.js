/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (!preorder.length) return null
    if (preorder.length === 1) return new TreeNode(preorder[0])

    let rootVal = preorder[0]
    let root = new TreeNode(rootVal)
    let rootInorderIndex = inorder.indexOf(rootVal)
    let leftLength = rootInorderIndex
    if (leftLength) {
      let [
        leftPreOrder,
        leftInorder
      ] = [
        preorder.slice(1, leftLength + 1),
        inorder.slice(0, leftLength)
      ]
      root.left = buildTree(leftPreOrder, leftInorder)
    }

    let rightLength = preorder.length - leftLength - 1
    if (rightLength) {
      let [
        rightPreOrder,
        rightInorder
      ] = [
        preorder.slice(-rightLength),
        inorder.slice(-rightLength)
      ]
      root.right = buildTree(rightPreOrder, rightInorder)
    }

    return root
};

