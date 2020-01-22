// https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/

const hasLine = (moves) => {
    const lineCount = Array(6).fill(0)
    moves.forEach((move) => {
        lineCount[move[0]]++
        lineCount[move[1]+3]++
    })
    return lineCount.includes(3)
}

const hasCrossLine = (moves) => {
    let c1 = 0, c2 = 0
    moves.forEach((move) => {
        if (move[0] === 1 && move[1] === 1) { c1++; c2++; }
        else if (move[0] === 0 && move[1] === 0) c1++
        else if (move[0] === 2 && move[1] === 2) c1++
        else if (move[0] === 0 && move[1] === 2) c2++
        else if (move[0] === 2 && move[1] === 0) c2++
    })
    return c1 === 3 || c2 === 3
} 

/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    if (moves.length < 5) {
        return 'Pending'
    }
    
    const A = []
    const B = []
    
    moves.forEach((move, index) => {
        if (index % 2 === 0) {
            A.push(move)
        } else {
            B.push(move)
        }
    })
    
    if (A.length >= 3 && (hasLine(A) || hasCrossLine(A))) return 'A'
    if (B.length >= 3 && (hasLine(B) || hasCrossLine(B))) return 'B'
    
    return moves.length === 9 ? 'Draw' : 'Pending'
};
