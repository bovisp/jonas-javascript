let john = {
  name: 'John',
  mass: 90,
  height: 1.80,
  calculateBMI: function () {
    this.BMI = this.mass / (this.height * this.height)

    return this.BMI
  }
}

let mark = {
  name: 'Mark',
  mass: 100,
  height: 1.95,
  calculateBMI: function () {
    this.BMI = this.mass / (this.height * this.height)

    return this.BMI
  }
}

console.log(`${mark.name}'s BMI is ${mark.calculateBMI()}`)
console.log(`${john.name}'s BMI is ${john.calculateBMI()}`)