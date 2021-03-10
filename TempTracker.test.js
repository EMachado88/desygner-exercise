const TempTracker = require('./TempTracker')

const tempTracker = new TempTracker


test('adds 30, 10 and 20, min should be 10', () => {
  tempTracker.setTemp(30)
  tempTracker.setTemp(10)
  tempTracker.setTemp(20)

  expect(tempTracker.getMinTemp()).toBe(10)
})

test('max should be 30', () => {
  expect(tempTracker.getMaxTemp()).toBe(30)
})

test('avg should be 20', () => {
  expect(tempTracker.getAvgTemp()).toBe(20)
})
