// https://leetcode.com/problems/subdomain-visit-count/
/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
  const map = {}
  cpdomains.forEach((cpdomain) => {
    const [numStr, domain] = cpdomain.split(' ')
    const num = parseInt(numStr, 10)
    const paths = domain.split('.')
    while (paths.length) {
      const d = paths.join('.')
      map[d] = (map[d]  || 0) + num
      paths.shift()
    }
  })
  const ret = []
  for (const key of Object.keys(map)) {
    ret.push(`${map[key]} ${key}`)
  }
  return ret
};
