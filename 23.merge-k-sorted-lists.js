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
    let h = new heap(lists.filter(list => list), i => i.val)
    let head = node = h.pop()
    while (h.size()) {
      node.next && h.push(node.next)

      let next = h.pop()
      node.next = next
      node = next
    }

    return head || null
};

var heap = function (arr, valueFunc = i => i) {
  arr = arr || []
  this.content = arr
  this.valueFunc = valueFunc
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
  while (i > 0) {
    let parentIndex = Math.floor((i - 1) / 2)
    if (this.valueFunc(this.content[parentIndex]) <= this.valueFunc(this.content[i])) return
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

    let swap = i
    if (childIndexLeft <= this.content.length - 1) {
      if (this.valueFunc(this.content[childIndexLeft]) < this.valueFunc(this.content[i])) {
        swap = childIndexLeft
      }
    }

    if (childIndexRight <= this.content.length - 1) {
      if (this.valueFunc(this.content[childIndexRight]) < this.valueFunc(this.content[i])) {
        swap = this.valueFunc(this.content[swap]) < this.valueFunc(this.content[childIndexRight])
        ? swap
        : childIndexRight
      }
    }
    if (swap === i) return

    let swapValue = this.content[swap]
    this.content[swap] = this.content[i]
    this.content[i] = swapValue

    i = swap
  }
}


// let arr = [3, 3, 4, 1, 4, 8]
// let hh = new heap(arr)
// hh.push(0)
// while (hh.size() > 0)
//   console.log(hh.pop(), hh.content);

