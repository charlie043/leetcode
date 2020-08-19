// https://leetcode.com/problems/goat-latin/
/**
 * @param {string} S
 * @return {string}
 */
const vowels = ['a', 'i', 'u', 'e', 'o']
var toGoatLatin = function(S) {
  const words = S.split(' ')
  return words.map((word, index) => {
    const suffix = Array(index+1).fill(0).map(() => 'a')
    const [head, ...others] = word
    if (vowels.includes(head.toLowerCase())) {
      return [head, ...others, 'ma', ...suffix].join('')
    } else {
      return [...others, head, 'ma', ...suffix].join('')
    }
  }).join(' ')
};
