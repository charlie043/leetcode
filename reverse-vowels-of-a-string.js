// https://leetcode.com/problems/reverse-vowels-of-a-string/
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const S = s.split('')
  let si = 0
  let ei = S.length - 1
  while (si < ei) {
    if (S[si].match(/[aiueoAIUEO]/g)) {
      while (si < ei) {
        if (S[ei].match(/[aiueoAIUEO]/g)) {
          const tmp = S[si]
          S[si] = S[ei]
          S[ei] = tmp
          ei--
          break
        }
        ei--
      }
    }
    si++
  }
  return S.join('')
};
