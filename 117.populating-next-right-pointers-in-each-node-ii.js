/*
 * @lc app=leetcode id=117 lang=javascript
 *
 * [117] Populating Next Right Pointers in Each Node II
 */
/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) return root

    let queue = [root]
    let nextQueue = []
    let prev = null
    while (queue.length) {
      queue.forEach(node => {
        if (prev) {
          prev.next = node
        }
        prev = node

        node.left && nextQueue.push(node.left)
        node.right && nextQueue.push(node.right)
      })

      prev.next = null
      prev = null

      queue = nextQueue
      nextQueue = []
    }
    return root
};

