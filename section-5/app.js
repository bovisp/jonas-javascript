// *** Function constructor ***

// var Person = function (name, yearOfBirth, job) {
//   this.name = name
//   this.yearOfBirth = yearOfBirth
//   this.job = job
// }

// Person.prototype.calculateAge = function () {
//   return 2020 - this.yearOfBirth
// }

// Person.prototype.lastName = 'Smith'

// var john = new Person('John', 1990, 'teacher')
// var jane = new Person('Jane', 1969, 'designer')
// var mark = new Person('Mark', 1948, 'retired')

// console.log(john.lastName)
// console.log(jane.lastName)
// console.log(mark.lastName)

// *** Object.create ***

// var personProto = {
//   calculateAge: function () {
//     return 2020 - this.yearOfBirth
//   }
// }

// var john = Object.create(personProto, {
//   name: { value: 'John' },
//   yearOfBrith: { value: 1990 },
//   job: { value: 'teacher' }
// })

// *** Passing functions as arguments ***

// var years = [
//   1990, 1965, 1937, 2005, 1998
// ]

// function arrayCalc(arr, func) {
//   var arrResult = []

//   for (var index = 0; index < arr.length; index++) {
//     arrResult.push(func(arr[index])) 
//   }

//   return arrResult
// }

// function calculateAge (yearOfBirth) {
//   return 2016 - yearOfBirth
// }

// function isFullAge (age) {
//   return age >= 18
// }

// function maxHeartRate (age) {
//   if (age >= 18 && age <= 81) {
//     return Math.round(206.9 - (0.67 * age))
//   }
  
//   return -1
// }

// var ages = arrayCalc(years, calculateAge)
// var fullAges = arrayCalc(ages, isFullAge)
// var rates = arrayCalc(ages, maxHeartRate)

// console.log(ages)
// console.log(fullAges)
// console.log(rates)

// *** Functions returning functions ***

// function interviewQuestion (job) {
//   switch (job) {
//     case 'designer':
//       return function (name) {
//         console.log(`${name}, can you please explain what UX design is?`)
//       }

//       break
    
//     case 'teacher':
//       return function (name) {
//         console.log(`What subject do you teach, ${name}?`)
//       }

//       break

//     default:
//       return function (name) {
//         console.log(`Hello, ${name}, what do you do?`)
//       }

//       break
//   }
// }

// interviewQuestion('teacher')('John')
// interviewQuestion('designer')('John')

// *** Immediately Invoked Function Expressions ***

// (function (goodLuck) {
//   var score = Math.floor(Math.random() * 10)
//   console.log(`${score} >= ${ 5 - goodLuck}`)
// })(5)

// *** Closures ***

// function retirement (retirementAge) {
//   var a = ' years left until retirement.'

//   return function (yearOfBirth) {
//     var age = 2016 - yearOfBirth

//     console.log(`${retirementAge - age}${a}`)
//   }
// }

// var retirementUS = retirement(66)
// retirementUS(1990)

// var retirementGermany = retirement(65)
// retirementGermany(1990)

// var retirementIceland = retirement(67)
// retirementIceland(1990)

// function interviewQuestion (job) {
//   return function (name) {
//     switch (job) {
//       case 'designer':
//         console.log(`${name}, can you please explain what UX design is?`)
//         break
      
//       case 'teacher':
//         console.log(`What subject do you teach, ${name}?`)  
//         break
  
//       default:
//         console.log(`Hello, ${name}, what do you do?`)
//         break
//     }
//   }
// }

// var designerQuestion = interviewQuestion('designer')
// designerQuestion('John')

// var teacherQuestion = interviewQuestion('teacher')
// teacherQuestion('Mary')

// var janitorQuestion = interviewQuestion('janitor')
// janitorQuestion('Jane')

// *** Call, bind, apply ***

var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function (style, timeOfDay) {
    if (style === 'formal') {
      console.log(`Good ${timeOfDay}, ladies and gentlemen. I'm ${this.name}, I'm a ${this.job} and I'm ${this.age} years old.`)

      return
    }

    console.log(`Hey! What's up? I'm ${this.name}, I'm a ${this.job} and I'm ${this.age} years old. Have a nice ${timeOfDay}.`)
  }
}

var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
}

// console.log(john.presentation('formal', 'morning'))

// console.log(john.presentation.call(emily, 'friendly', 'afternoon'))

// This won't work as the `presentation` method accepts two variables as arguments, not an array.
// console.log(john.presentation.apply(emily, ['friendly', 'afternoon']))

var johnFriendly = john.presentation.bind(john, 'friendly')
// console.log(johnFriendly('evening'))
// console.log(johnFriendly('night'))

var emilyFriendly = john.presentation.bind(emily, 'formal')
// console.log(emilyFriendly('night'))

var years = [
  1990, 1965, 1937, 2005, 1998
]

function arrayCalc(arr, func) {
  var arrResult = []

  for (var index = 0; index < arr.length; index++) {
    arrResult.push(func(arr[index])) 
  }

  return arrResult
}

function calculateAge (yearOfBirth) {
  return 2016 - yearOfBirth
}

function isFullAge (limit, age) {
  return age >= limit
}

var ages = arrayCalc(years, calculateAge)

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20))

console.log(ages)
console.log(fullJapan)