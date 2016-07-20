const test = require('tape')
const parse = require('./index.js')

test('is a function', assert => {
  assert.equal('function', typeof(parse))
  assert.end()
})

test('returns a string', assert => {
  assert.equal('string', typeof(parse('')))
  assert.end()
})

test('returns the expected output', assert => {
  const path = '/opt/homebrew-cask/Caskroom/google-chrome/latest/Google Chrome.app/Contents/Versions/51.0.2704.103/Google Chrome Helper.app/Contents/MacOS/Google Chrome Helper'
  const expected = '/opt/homebrew-cask/Caskroom/google-chrome/latest/Google Chrome.app/Contents/Versions/51.0.2704.103/Google Chrome Helper.app'
  const actual = parse(path)
  assert.equal(actual, expected)
  assert.end()
})

test('returns the expected output', assert => {
  const path = '/Applications/Utilities/Terminal.app/Contents/MacOS/Terminal'
  const expected = '/Applications/Utilities/Terminal.app'
  const actual = parse(path)
  assert.equal(actual, expected)
  assert.end()
})

test('returns the expected output', assert => {
  const path = '/System/Library/PrivateFrameworks/GeoServices.framework/Versions/A/XPCServices/com.apple.geod.xpc/Contents/MacOS/com.apple.geod'
  const expected = '/System/Library/PrivateFrameworks/GeoServices.framework/Versions/A/XPCServices/com.apple.geod.xpc/Contents/MacOS/com.apple.geod'
  const actual = parse(path)
  assert.equal(actual, expected)
  assert.end()
})
