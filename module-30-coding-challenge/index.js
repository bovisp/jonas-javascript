let john = {
  amounts: [124, 48, 268, 180, 42],
  tips: [],
  totals: [],
  average: null,
  calculateTotals: function () {
    for (let i = 0; i < this.amounts.length; i++) {
      this.tips[i] = this.calculateTip(this.amounts[i])

      this.totals[i] = this.amounts[i] + this.tips[i]
    }

    return this.totals
  },
  calculateTips: function () {
    for (let i = 0; i < this.amounts.length; i++) {
      this.tips[i] = this.calculateTip(this.amounts[i])
    }

    return this.tips
  },
  calculateTip: function (amount) {
    if (amount > 200) {
      return amount * 0.1
    } else if (amount >= 50 && amount <= 200) {
      return amount * 0.15
    } else {
      return amount * 0.2
    }
  }
}

let mark = {
  amounts: [77, 475, 110, 45],
  tips: [],
  totals: [],
  average: null,
  calculateTotals: function () {
    for (let i = 0; i < this.amounts.length; i++) {
      this.tips[i] = this.calculateTip(this.amounts[i])

      this.totals[i] = this.amounts[i] + this.tips[i]
    }

    return this.totals
  },
  calculateTips: function () {
    for (let i = 0; i < this.amounts.length; i++) {
      this.tips[i] = this.calculateTip(this.amounts[i])
    }

    return this.tips
  },
  calculateTip: function (amount) {
    if (amount > 300) {
      return amount * 0.25
    } else if (amount >= 100 && amount <= 300) {
      return amount * 0.1
    } else {
      return amount * 0.2
    }
  }
}

function tipAverage(tipArr) {
  let sum = 0

  for (let i = 0; i < tipArr.length; i++) {
    sum += tipArr[i]
  }

  return sum / tipArr.length
}

console.log(john.calculateTips())
console.log(john.calculateTotals())

console.log(mark.calculateTips())
console.log(mark.calculateTotals())

john.average = tipAverage(john.calculateTips())
console.log(john.average)

mark.average = tipAverage(mark.calculateTips())
console.log(mark.average)

if (john.average > mark.average) {
  console.log(`John's tip average of ${john.average} is greater that Mark's tip average of ${mark.average}`)
} else if (mark.average > john.average) {
  console.log(`Marks's tip average of ${mark.average} is greater that John's tip average of ${john.average}`)
} else {
  console.log(`John's tip average of ${john.average} is the same as Mark's tip average of ${mark.average}`)
}