// https://leetcode.com/problems/surrounded-regions/
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const createCluster = (cluster, board, i, j) => {
  cluster.push([i, j])
  board[i][j] = 'C'
  const n = board[i-1] && board[i-1][j]
  const s = board[i+1] && board[i+1][j]
  const w = board[i] && board[i][j-1]
  const e = board[i] && board[i][j+1]
  if (n === 'O') createCluster(cluster, board, i-1, j)
  if (s === 'O') createCluster(cluster, board, i+1, j)
  if (w === 'O') createCluster(cluster, board, i, j-1)
  if (e === 'O') createCluster(cluster, board, i, j+1)
  return cluster
}

const canEscape = (cluster, n, m) => {
  return !!cluster.find(([i, j]) => {
    return i === 0 || j === 0 
  }) || !!cluster.find(([i, j]) => {
    return i === n-1 || j === m-1
  })
}

var solve = function(board) {
  if (!board.length) return
  const n = board.length
  const m = board[0].length
  const clusters = []
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const c = board[i][j]
      if (c === 'O') {
        clusters.push(createCluster([], board, i, j))
      }
    }
  }
  clusters.forEach((cluster) => {
    const replace = canEscape(cluster, n, m) ? 'O' : 'X'
    cluster.forEach(([i, j]) => {
      board[i][j] = replace
    })
  }) 
}
