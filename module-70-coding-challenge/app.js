(function () {
  var score = 0

  var questions = [
    new Question({
      question: 'Is JavaScript the coolest programming language in the world',
      answers: [
        'Yes',
        'No'
      ],
      correctAnswer: 0
    }),
    new Question({
      question: 'Who is the teacher in the course',
      answers: [
        'John',
        'Mary',
        'Jonas'
      ],
      correctAnswer: 2
    }),
    new Question({
      question: 'How would you best describe how it feels to learn programming',
      answers: [
        'Hard',
        'Boring',
        'Silly',
        'Fun',
        'Awful'
      ],
      correctAnswer: 3
    })
  ]
  
  function Question (question) {
    this.question = question.question
    this.answers = question.answers
    this.correctAnswer = question.correctAnswer
    this.score = 0
  }
  
  Question.prototype.init = function () {
    console.log(this.question)
  
    this.listAnswers()
  
    this.prompt()
  }
  
  Question.prototype.listAnswers = function () {
    this.answers.forEach(function (answer, index) {
      console.log(`${index}: ${answer}`)
    })
  }
  
  Question.prototype.prompt = function () {
    let answer = prompt('Please type the number correspoding to the correct answer.')
  
    if (answer === 'exit') {
      console.log('Thanks for playing!')
  
      return
    }
    
    this.checkAnswer(answer)
  
    restart()
  }
  
  Question.prototype.checkAnswer = function (answer) {
    if (parseInt(answer) !== this.correctAnswer) {
      console.log('Sorry. That is not the correct answer.')

      this.displayScore(false)

      return
    }

    console.log('That is the correct answer!')

    this.displayScore(true)
  }
  
  Question.prototype.displayScore = function (correct) {
    var score = updateScore(correct)

    console.log(`Your current score is: ${score}`)
    console.log('========================')
  }
  
  function getRandomNumber (max) {
    return Math.floor(Math.random() * max)
  }
  
  function restart () {
    var question = questions[getRandomNumber(questions.length)]
  
    question.init()
  }

  function updateScore (correct) {
    return correct ? score += 1 : score
  }
  
  var randomQuestion = getRandomNumber(questions.length)
  
  var question = questions[randomQuestion]
  
  question.init()
})()