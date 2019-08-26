/**
 * 先想再写！！！！！
 * 想清楚，最小验证！！
 * 验证完了，再写！！
 */

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
var findMedianSortedArrays = function (nums1, nums2) {
  let m1, m2
  let len1 = nums1.length
  let len2 = nums2.length

  if (!len1) {
    return getMedianArray(nums2)
  } else if (!len2) {
    return getMedianArray(nums1)
  }

  while (len1 !== 1 && len2 !== 1) {
    m1 = getMedianArray(nums1)
    m2 = getMedianArray(nums2)

    if (!isSameEven(len1, len2) || isSameEven(len1, 1)) {
      if (m1 < m2) {
        nums1 = getHalfArray(nums1, 'right')
        nums2 = getHalfArray(nums2, 'left', len1 - nums1.length)
      } else {
        nums1 = getHalfArray(nums1, 'left')
        nums2 = getHalfArray(nums2, 'right', len1 - nums1.length)
      }
    } else {
      let left1 = nums1[len1 / 2 - 1]
      let right1 = nums1[len1 / 2]
      let left2 = nums2[len2 / 2 - 1]
      let right2 = nums2[len2 / 2]
      if (left1 >= left2 && right1 <= right2) {
        return getMedianArray(nums1)
      }
      if (left1 <= left2 && right1 >= right2) {
        return getMedianArray(nums2)
      }
      if (left1 < left2) {
        nums1 = getHalfArray(nums1, 'right')
        nums2 = getHalfArray(nums2, 'left', len1 - nums1.length)
      } else {
        nums1 = getHalfArray(nums1, 'left')
        nums2 = getHalfArray(nums2, 'right', len1 - nums1.length)
      }
    }
    len1 = nums1.length
    len2 = nums2.length

    console.log(nums1, nums2)
  }

  if (len1 === 1 && len2 === 1) {
    return (nums1[0] + nums2[0]) / 2
  } else {
    let longer = len1 === 1 ? nums2 : nums1
    let shorter = len1 === 1 ? nums1 : nums2
    let longerLen = longer.length
    if (longer.length % 2 === 0) {
      longer = [longer[longerLen / 2 - 1], longer[longerLen / 2]]
    } else {
      let left = longer[longerLen / 2 - 1.5]
      let middle = longer[longerLen / 2 - 0.5]
      let right = longer[longerLen / 2 + 0.5]
      return shorter[0] < left ? (left + middle) / 2
      : shorter[0] > right ? (middle + right) / 2
      : (shorter[0] + middle) / 2
    }
    return shorter[0] < longer[0]
    ? longer[0]
    : shorter[0] > longer[1]
      ? longer[1]
      : shorter[0]
  }
}

var getMedianArray = function (nums) {
  let len = nums.length
  if (len % 2 === 0) {
    return (nums[len / 2 - 1] + nums[len / 2]) / 2
  } else {
    return nums[(len - 1) / 2]
  }
}

var getHalfArray = function (nums, part, fixEven = undefined) {
  let len = nums.length
  let fixFlag = fixEven !== undefined && !isSameEven(fixEven, Math.floor(nums.length / 2))
  ? 1
  : 0
  fixEven !== undefined && console.log('fix', fixEven, Math.floor(nums.length / 2), fixFlag)
  if (part === 'left') {
    let leftMaxIndex = len % 2 === 0 ? len / 2 - 1 : (len - 1) / 2
    return nums.slice(0, leftMaxIndex + 1 + fixFlag)
  } else {
    let rightMinIndex = len % 2 === 0 ? len / 2 : (len - 1) / 2
    return nums.slice(rightMinIndex - fixFlag, len)
  }
}

var isSameEven = function (num1, num2) {
  return (num1 + 2) % 2 === (num2 + 2) % 2
}

// console.log(isSameEven(-1, 1))

// console.log(getMedianArray([1]) === 1)
// console.log(getMedianArray([1, 2]) === 1.5)
// console.log(getMedianArray([1, 2, 3]) === 2)

// console.log(getHalfArray([1, 2, 3], 'left')) // [1]
// console.log(getHalfArray([1, 2, 3], 'right')) // [1.5, 2]
// console.log(getHalfArray([1, 2], 'left')) //  == [1, 2]
// console.log(getHalfArray([1, 2], 'right')) //  == [2, 3]

// console.log(findMedianSortedArrays([1], [1])) // 1
// console.log(findMedianSortedArrays([1, 2], [3, 4])) // 2.5
// console.log(findMedianSortedArrays([1, 2, 3], [-1, 4])) // 2
// console.log(findMedianSortedArrays([1, 2, 3], [4, 5, 6])) // 3.5
// console.log(findMedianSortedArrays([3, 4, 5, 6], [1, 2])) // 3.5

// console.log(findMedianSortedArrays([1, 2], [-1, 3])) // 1.5
// console.log(findMedianSortedArrays([1], [2, 3, 4])) // 2.5

// var findMedianSortedArrays = function(nums1, nums2) {
//     let len1 = nums1.length
//     let len2 = nums2.length

//     let index1 = index2 = 0
//     let mixedArr = []
//     let middleIndices = getMedianIndices(nums1, nums2)
//     while (index1 < len1 && index2 < len2) {
//       if (nums1[index1] < nums2[index2]) {
//         mixedArr.push(nums1[index1++])
//       } else {
//         mixedArr.push(nums2[index2++])
//       }
//     }

//     if (mixedArr.length > middleIndices[1])
//     return (mixedArr[middleIndices[0]] + mixedArr[middleIndices[1]]) / 2
    
//     if (index1 < len1) {
//       mixedArr = mixedArr.concat(nums1.slice(index1))
//     } else {
//       mixedArr = mixedArr.concat(nums2.slice(index2))
//     }

//     return (mixedArr[middleIndices[0]] + mixedArr[middleIndices[1]]) / 2

// };

// var getMedianIndices = function(nums1, nums2) {
//   let len1 = nums1.length
//   let len2 = nums2.length
//   if ((len1 + len2) % 2 === 0) {
//     return [(len1 + len2) / 2 - 1, (len1 + len2) / 2]
//   } else {
//     return [(len1 + len2 + 1) / 2 - 1, (len1 + len2 + 1) / 2 - 1]
//   }
// }
