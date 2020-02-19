const john = (89 + 120 + 103) / 3
const mike = (116 + 94 + 123) / 3
const mary = (97 + 134 + 105) / 3

console.log(`John's average score is ${john} points`)
console.log(`Mike's average score is ${mike} points`)
console.log(`Mary's average score is ${mary} points`)

if (mike > john && mike > mary) {
  console.log(`Mike's average score of ${mike} points is greater than John's and Mary's scores`)
} else if (john > mike && john > mary) {
  console.log(`John's average score of ${john} points is greater than Mike's and Mary's scores`)
} else if (mary > mike && mary > john) {
  console.log(`Mary's average score of ${mary} points is greater than Mike's and John's scores`)
} else {
  console.log(`The all have an average score of ${mike}`)
}