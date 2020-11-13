// https://leetcode.com/problems/encode-and-decode-tinyurl/
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */

const base = 'http://tinyurl.com/'
const encodeMap = {}
const decodeMap = {}
let index = 0

var encode = function(longUrl) {
  if (encodeMap[longUrl]) return encodeMap[longUrl]
  const shortUrl = `${base}${index}`
  encodeMap[longUrl] = shortUrl
  decodeMap[shortUrl] = longUrl
  index++
  return shortUrl
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
  return decodeMap[shortUrl]
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
