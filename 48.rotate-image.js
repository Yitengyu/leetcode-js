/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let rotateMatrix = []
  const N = matrix.length

  for (let i = 0; i < N; i++) {
    rotateMatrix[i] = matrix[i].slice()
  }
  
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      rotateMatrix[i][j] = matrix[N - j - 1][i]
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      matrix[i][j] = rotateMatrix[i][j]
    }
  }
};

// console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))

