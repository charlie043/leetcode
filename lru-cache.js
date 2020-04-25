// https://leetcode.com/problems/lru-cache/
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity
  this.cache = []
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  const i = this.cache.findIndex(([_key, _value]) => {
    return key === _key
  }) 
  if (i < 0) {
    return -1
  } else {
    const [d] = this.cache.splice(i, 1)
    this.cache.push(d)
    return d[1]
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.capacity <= 0) return
  const i = this.cache.findIndex(([_key, _value]) => {
    return key === _key
  })
  if (i < 0) {
    // add new key
    if (this.cache.length === this.capacity) {
      this.cache.shift()
    }
    this.cache.push([key, value])
  } else {
    // update value
    const [d] = this.cache.splice(i, 1)
    d[1] = value
    this.cache.push(d)
  }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
