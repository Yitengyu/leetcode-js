/*
 * @lc app=leetcode id=133 lang=javascript
 *
 * [133] Clone Graph
 */
/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    // 先画点，再画邻居
    let result = new Node(node.val, []) // 当前在画的点
    let queue = [node] // 已画了对应点，需要画邻居的原始点
    let nextQueue = []
    let drawedPairs = [[node, result]]
    while (queue.length) {
      // 画上邻居，记下没画邻居的邻居
      for (let i = 0; i < queue.length; i++) {
        let currOrigin = queue[i]
        let currMapped = findMapped(currOrigin, drawedPairs) // 一定存在
        let originNeighbors = currOrigin.neighbors
        originNeighbors.forEach(item => {
          let mapped = findMapped(item, drawedPairs)
          if (!mapped) {
            let newOne = new Node(item.val, [])
            drawedPairs.push([item, newOne])
            currMapped.neighbors.push(newOne)
            nextQueue.push(item)
          } else {
            currMapped.neighbors.push(mapped)
          }
        });
      }
      queue = nextQueue
      nextQueue = []
    }
    return result
};

var findMapped = function (node, drawedPairs) {
  let pair = drawedPairs.find(item => item[0] === node)
  return pair ? pair[1] : pair
}

