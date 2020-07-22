// https://leetcode.com/problems/word-search/
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const find = (x, y, _words, _board) => {
  const [_w, ...__words] = [..._words]
  if (
    !_board[x] ||
    !_board[x][y] ||
    _w !== _board[x][y]
  ) {
    return false
  }
  
  if (!__words.length) return true
  
  const __board = _board.map(r => r.map(n => n))
  __board[x][y] = '_'
  
  return (
    find(x, y-1, __words, __board) ||
    find(x, y+1, __words, __board) ||
    find(x+1, y, __words, __board) ||
    find(x-1, y, __words, __board)
  )
}
var exist = function(board, word) {
  const m = board.length
  const n = board[0].length
  const words = word.split('')
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if(find(i, j, words, board)) return true
    }
  }
  return false
};
