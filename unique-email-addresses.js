// https://leetcode.com/problems/unique-email-addresses/
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  const map = {}
  emails.forEach(email => {
    const [fullLocalName, domain] = email.split('@')
    const [localName, ...ignore] = fullLocalName.split('+')
    const mail = `${localName.replace(/\./g, '')}@${domain}`
    map[mail] = (map[mail] || 0) + 1
  })
  return Object.keys(map).length
};
