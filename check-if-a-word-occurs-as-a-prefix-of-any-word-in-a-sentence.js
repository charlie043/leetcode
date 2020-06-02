// https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/
/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
  const words = sentence.split(' ')
  for (let i = 0; i < words.length; i++) {
    console.log(words[i], searchWord, words[i].match(searchWord))
    const { index } =  words[i].match(searchWord) || {}
    if (index === 0) {
      return i+1
    }
  }
  return -1
};
