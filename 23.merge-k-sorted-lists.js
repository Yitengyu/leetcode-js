/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    for (let i = 0; )
};

var heap = function (arr) {
  arr = arr || []
  this.content = arr
  this.build()
}

heap.prototype.build = function () {
  if (this.content.length <= 1) return
  let lastNonLeafIndex =  Math.floor(this.content.length / 2 - 1)
  let target = lastNonLeafIndex
  while (target >= 0) {
    this.sinkDown(target--)
  }
}

heap.prototype.size = function () {
  return this.content.length
}

heap.prototype.push = function (n) {
  this.content.push(n)
  this.bubbleUp(this.content.length - 1)
}

heap.prototype.bubbleUp = function (i) {
  if (i === 0) return
  let parentIndex = Math.floor((i - 1) / 2)
  while (i > 0) {
    if (this.content[parentIndex] <= this.content[i]) return
    let parentValue = this.content[parentIndex]
    this.content[parentIndex] = this.content[i]
    this.content[i] = parentValue
    i = parentIndex
  }
  return
}

heap.prototype.pop = function () {
  if (!this.content.length) return

  let end = this.content.pop()
  if (!this.content.length) return end
  let result = this.content[0]
  this.content[0] = end
  this.sinkDown(0)

  return result
}

heap.prototype.sinkDown = function (i) {
  while (i <= Math.floor(this.content.length / 2 - 1)) {
    let childIndexLeft = 2 * i + 1
    let childIndexRight = 2 * i + 2

    let swap = null
    if (childIndexLeft <= this.content.length - 1) {
      if (this.content[childIndexLeft] < this.content[i]) {
        swap = childIndexLeft
      }
    }

    if (childIndexRight <= this.content.length - 1) {
      if (this.content[childIndexRight] < this.content[i]) {
        swap = this.content[swap] < this.content[childIndexRight]
        ? swap
        : childIndexRight
      }
    }
    if (swap === null) return

    let swapValue = this.content[swap]
    this.content[swap] = this.content[i]
    this.content[i] = swapValue
  }
}


// let arr = [3, 4, 1, 8]
// let hh = new heap(arr)
// while (hh.size() > 0)
//   console.log(hh.pop());

