/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  let t1 = new treeFullRowTraverse(p)
  let t2 = new treeFullRowTraverse(q)

  while (t1.hasNext() && t2.hasNext() || !t1.hasNext() && !t2.hasNext()) {
    if (!t1.hasNext() && !t2.hasNext()) return true
    if (t1.next() !== t2.next()) return false
  }
  return false
};

var treeFullRowTraverse = function (root) {
  this.queue = root ? [root] : [null]
  this.nextQueue = []
}

treeFullRowTraverse.prototype.next = function () {
  let node = this.queue.pop()
  if (node) {
    this.nextQueue.push(node.left, node.right)
  }

  if (!this.queue.length) {
    this.queue = this.nextQueue
    this.nextQueue = [] 
  }
  return node ? node.val : null
}

treeFullRowTraverse.prototype.hasNext = function () {
  return this.queue.concat(this.nextQueue).some(node => node)
}

// var isSameTree = function(p, q) {
//   let result = !p && !q
//     ||
//     p && q && (p.val === q.val)
//     && isSameTree(p.left, q.left)
//     && isSameTree(p.right, q.right)
//   return !!result
// };
