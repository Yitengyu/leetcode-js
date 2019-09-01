/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let [left, right] = getNonRorated(nums)
    
    let result
    result = binarySearch(left, target)
    if (result !== -1) return result
    result = binarySearch(right, target)
    if (result !== -1) return result + left.length
    return -1
};

var binarySearch = function(nums, target) {
  let len = nums.length
  if (!len) return -1
  let lo = 0
  let hi = len - 1

  while (lo <= hi) {
    let mid = lo + ((hi - lo) >> 1)

    if (nums[mid] === target) {
      return mid
    }

    if (nums[mid] < target) {
      lo = mid + 1
    } else if (nums[mid] > target) {
      hi = mid - 1
    }
  }

  return -1
};

var getNonRorated = function (nums) {
  let len = nums.length
  if (len <= 1) return [nums, []]
  let lo = 0
  let hi = len - 1
  if (nums[lo] < nums[hi]) return [nums, []]

  let target = 0
  while (lo <= hi) {
    let mid = lo + ((hi - lo) >> 1)

    if (nums[mid] > nums[mid + 1]) {
      target = mid
      break
    }
    if (nums[mid - 1] !== undefined && nums[mid - 1] > nums[mid]) {
      target = mid - 1
      break
    }

    if (nums[mid] > nums[hi]) {
      lo = mid + 1
    } else if (nums[mid] < nums[lo]) {
      hi = mid - 1
    }
  }
  return [nums.slice(0, target + 1), nums.slice(target + 1, len)]
}
