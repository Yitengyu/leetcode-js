/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let len1 = nums1.length
    let len2 = nums2.length

    let index1 = index2 = 0
    let mixedArr = []
    let middleIndices = getMedianIndices(nums1, nums2)
    while (index1 < len1 && index2 < len2) {
      if (nums1[index1] < nums2[index2]) {
        mixedArr.push(nums1[index1++])
      } else {
        mixedArr.push(nums2[index2++])
      }
    }

    if (mixedArr.length > middleIndices[1])
    return (mixedArr[middleIndices[0]] + mixedArr[middleIndices[1]]) / 2
    
    if (index1 < len1) {
      mixedArr = mixedArr.concat(nums1.slice(index1))
    } else {
      mixedArr = mixedArr.concat(nums2.slice(index2))
    }

    return (mixedArr[middleIndices[0]] + mixedArr[middleIndices[1]]) / 2

};

var getMedianIndices = function(nums1, nums2) {
  let len1 = nums1.length
  let len2 = nums2.length
  if ((len1 + len2) % 2 === 0) {
    return [(len1 + len2) / 2 - 1, (len1 + len2) / 2]
  } else {
    return [(len1 + len2 + 1) / 2 - 1, (len1 + len2 + 1) / 2 - 1]
  }
}
