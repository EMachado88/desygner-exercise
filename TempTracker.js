class TempTracker {
  constructor () {
    this.tempList = []
  }

  setTemp (temp) {
    this.tempList.push(temp)
  }

  getMinTemp () {
    return Math.min(...this.tempList)
  }

  getMaxTemp () {
    return Math.max(...this.tempList)
  }

  getAvgTemp () {
    return this.tempList.reduce((a, v) => a + v) / this.tempList.length
  }
}

module.exports = TempTracker
