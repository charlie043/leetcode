// https://leetcode.com/problems/longest-palindromic-substring/
const check3 = (base, index, spread = 1) => {
    if (base[index-spread] && base[index+spread] && base[index-spread] === base[index+spread]) {
        return check3(base, index, spread+1)    
    } else {
        const _spread = spread - 1 
        return base.slice(index-_spread, index+_spread+1).join('')
    }
}
const check2 = (base, index, spread = 1) => {
    if (base[index-spread] && base[index+spread+1] && base[index - spread] === base[index + spread + 1]) {
        return check2(base, index, spread+1)    
    } else {
        const _spread = spread - 1
        return base.slice(index-_spread, index+_spread+2).join('')
    }
    return base[index]
}
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (!s) return s
   const base = s.split('')
   let longest = s[0]
   base.forEach((_s, index) => {
       const p3 = check3(base, index)
       if (p3.length > longest.length) longest = p3
       
       if (base[index] === base[index+1]) {
        const p2 = check2(base, index)
        if (p2.length > longest.length) longest = p2
       }
   })
   return longest
};
