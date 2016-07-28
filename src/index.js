const concluding = require('string-concluding')

function parser (path) {
  if (typeof path !== 'string') throw new Error('expected a string')
  if (path.slice(-4) === '.app') {
    return path
  } else {
    const parsed = concluding('.app/', path)
    if (parsed !== path) {
      return parsed.slice(0, -1)
    } else {
      return path
    }
  }
}

module.exports = parser
