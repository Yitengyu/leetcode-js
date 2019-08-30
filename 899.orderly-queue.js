/*
 * @lc app=leetcode id=899 lang=javascript
 *
 * [899] Orderly Queue
 */
/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var orderlyQueue = function(S, K) {
  // K <= S
  let period = getLeastCommonMultiple(S.length, S.length - K)
  let weight = getWeight(S)
  let min = weight
  let result = S

  for (let i = 0; i < period; i++) {
    let movedWeight = getWeight(S.slice(0, K))
    weight = movedWeight + (weight - movedWeight *  Math.pow(2, S.length - K)) * Math.pow(2, K)

    S = S.slice(K) + S.slice(0, K)
    if (weight < min) {
      min = weight
      result = S
    }
  }
  return result
};

var getLeastCommonMultiple = function (x, y) {
  if (!x || !y) return 0

  let larger = Math.max(x, y)
  let smaller = Math.min(x, y)

  while (smaller) {
    let t = larger % smaller
    larger = smaller
    smaller = t
  }

  let maxCommonDivide = larger
  return (x * y / maxCommonDivide)
}

var getWeight = function (s) {
  let sArr = s.split('')
  let baseWeight = 1
  let weight = 0
  while (sArr.length) {
    weight += (sArr.pop().charCodeAt() - 97) * baseWeight
    baseWeight *= 2
  }
  return weight
}

console.log(orderlyQueue('baaca', 3))

