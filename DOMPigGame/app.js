/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores,
    roundScore,
    activePlayer,
    diceImg1,
    diceImg2,
    gamePlaying,
    previousRoll1,
    previousRoll2,
    winningScore,
    firstRoll

function setWinningScore (winningScoreInput = 0) {
  winningScore = winningScoreInput ? Math.floor(parseInt(winningScoreInput)) : 100

  document.querySelector('#winning-score-input').style.display = 'none'
  document.querySelector('#winning-score-btn').style.display = 'none'
  document.querySelector('#winning-score').style.display = 'inline'
  document.querySelector('#winning-score').textContent = winningScore
  document.querySelector('.input-wrapper form').style.justifyContent = 'center'
}

function showWinningScoreInput () {
  document.querySelector('#winning-score-input').style.display = 'inline'
  document.querySelector('#winning-score-btn').style.display = 'inline'
  document.querySelector('#winning-score').style.display = 'none'
}

function resetGame () {
  document.querySelector(`#name-${activePlayer}`).textContent = 'WINNER!'
  diceImg1.style.display = 'none '
  diceImg2.style.display = 'none '
  document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner')
  document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active')
  gamePlaying = false
}

function switchPlayer () {
  activePlayer = activePlayer === 0 ? 1 : 0
  roundScore = 0
  previousRoll = 0

  resetCurrent()

  document.querySelector('.player-0-panel').classList.toggle('active')
  document.querySelector('.player-1-panel').classList.toggle('active')

  diceImg1.style.display = 'none '
  diceImg2.style.display = 'none '
}

function resetCurrent () {
  document.getElementById('current-0').textContent = '0'
  document.getElementById('current-1').textContent = '0'
}

function initializeScores () {
  scores = [0, 0]
  roundScore = 0
  activePlayer = 0
  gamePlaying = true
  previousRoll = 0
  firstRoll = false

  resetCurrent()

  diceImg1 = document.querySelector('.dice1')
  diceImg2 = document.querySelector('.dice2')
  diceImg1.style.display = 'none'
  diceImg2.style.display = 'none'

  document.getElementById('score-0').textContent = '0'
  document.getElementById('score-1').textContent = '0'

  document.getElementById('name-0').textContent = 'PLAYER 1'
  document.getElementById('name-1').textContent = 'PLAYER 2'

  document.querySelector(`.player-0-panel`).classList.remove('winner')
  document.querySelector(`.player-1-panel`).classList.remove('winner')

  document.querySelector(`.player-0-panel`).classList.remove('active')
  document.querySelector(`.player-1-panel`).classList.remove('active')

  document.querySelector(`.player-0-panel`).classList.add('active')
}

function doubleSix (dice, previousRoll) {
  if (dice === 6 && previousRoll === 6) {
    scores[activePlayer] = 0
    document.getElementById(`score-${activePlayer}`).textContent = '0'

    return true
  }

  return false
}

function updateRoundScore () {
  var dice1 = Math.floor(Math.random() * 6) + 1
  var dice2 = Math.floor(Math.random() * 6) + 1

  diceImg1.style.display = 'inline-block'
  diceImg2.style.display = 'inline-block'
  diceImg1.src = `dice-${dice1}.png`
  diceImg2.src = `dice-${dice2}.png`

  setWinningScore()

  if ((dice1 !== 1 && dice2 !==1) && (doubleSix(dice1, previousRoll1) === false && doubleSix(dice2, previousRoll2) === false)) {
    roundScore = roundScore + dice1 + dice2
    document.querySelector(`#current-${activePlayer}`).textContent = roundScore
    previousRoll1 = dice1
    previousRoll2 = dice2

    return
  } 
  
  switchPlayer()
}

function updateOverallScore () {
  scores[activePlayer] += roundScore

  document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer]

  if (scores[activePlayer] >= winningScore ) {
    resetGame()

    return
  }
  
  switchPlayer()
}

document.querySelector('.btn-roll').addEventListener('click', function (e) {
  if (gamePlaying) {
    updateRoundScore()
  }
})

document.querySelector('.btn-hold').addEventListener('click', function (e) {
  if (gamePlaying) {
    updateOverallScore()
  }
})

document.querySelector('.btn-new').addEventListener('click', function (e) {
  showWinningScoreInput()

  initializeScores()
})

document.querySelector('#winning-score-btn').addEventListener('click', function (e) {
  e.preventDefault()

  winningScoreInput = document.querySelector('#winning-score-input').value

  if (isNaN(winningScoreInput)) {
    alert('That is not a valid number. Please enter a number.')

    return
  }

  if (winningScoreInput <= 0) {
    alert('The winning score must be greater than zero.')

    return
  }

  setWinningScore(winningScoreInput)

  initializeScores()
})

initializeScores()
resetCurrent()