'use strict';

console.log('Game setup ready');

//===== DOM ELEMENT SELECTION - The Foundation
console.log('=== DOM ELEMENTS SELECTION');

const messageEl = document.querySelector('.message');
console.log(messageEl);
console.log(messageEl.textContent);

messageEl.textContent = 'HELLO FROM JAVASCRIPT';

// Access score class name
const scoreEl = document.querySelector('.score');
console.log('Score Element:', scoreEl);

const numberEl = document.querySelector('.number');
const highscoreEl = document.querySelector('.highscore');
console.log('Current highscore:', highscoreEl.textContent);

const guessEl = document.querySelector('.guess');
guessEl.value = 10;
console.log('Guess input value:', guessEl.value);

// ===== Game State Variables =====
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('Secret Number:', secretNumber);

let score = 20;
let highscore = 0;

scoreEl.textContent = score;
highscoreEl.textContent = highscore;

console.log('Game State initialized');

// ===== Additional Variables =====
let playerName = 'Julia';
let attempts = 0;
let gameActive = true;

console.log('Player Name:', playerName);
console.log('Attempts:', attempts);
console.log('Game Active:', gameActive);

// BAsic Game logic

// Check button logic
document.querySelector('.check').addEventListener('click', function () {
  console.log('Check button clicked');

  const guess = Number(document.querySelector('.guess').value);
  console.log('Player guessed:', guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
    return;
  }
  if (guess < 1 || guess > 20) {
    document.querySelector('.message').textContent = '⚠️ Number must be between 1 and 20';
    return;
  }

  if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    document.body.style.backgroundColor = 'green'; // ✅ fixed property name

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    document.querySelector('.guess').disabled = true;
    document.querySelector('.check').disabled = true;

  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.guess').disabled = true;
      document.querySelector('.check').disabled = true;
      document.body.style.backgroundColor = 'red';
    }

  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.guess').disabled = true;
      document.querySelector('.check').disabled = true;
      document.body.style.backgroundColor = 'red';
    }
  }
});

// 🎯 AGAIN BUTTON LOGIC
document.querySelector('.again').addEventListener('click', function () {
  console.log('Again button is Working');

  // Reset game state
  score = START_SCORE; 
  secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;

  // Reset UI
  setMessage('Start guessing...');
  setScore(score);
  setNumber('?');
  clearInput();
  setBackground('');
  disablePlay(false);
});

////////////////////////////////////
// 🔧 CONSTANTS & SELECTORS

// Ranges and defaults
const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const START_SCORE = 20;

// Cached selectors (single source of truth)
const bodyEl = document.body;
const guessInputEl = document.querySelector('.guess');
const checkBtnEl = document.querySelector('.check');
const againBtnEl = document.querySelector('.again');

////////////////////////////////////
// 🛠️ HELPER FUNCTIONS

function setMessage(text) {
  messageEl.textContent = text;
}

function setNumber(value) {
  numberEl.textContent = value;
}

function setScore(value) {
  scoreEl.textContent = value;
}

function setHighscore(value) {
  highscoreEl.textContent = value;
}

function setBackground(color) {
  bodyEl.style.backgroundColor = color;
}

function disablePlay(disabled) {
  guessInputEl.disabled = disabled;
  checkBtnEl.disabled = disabled;
}

function clearInput() {
  guessInputEl.value = '';
}

function resetGameState() {
  score = START_SCORE;
  secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
}

function renderInitialUI() {
  setMessage('Start guessing...');
  setNumber('?');
  setScore(score);
  clearInput();
  disablePlay(false);
  setBackground('');
}

renderInitialUI();

checkBtnEl.addEventListener('click', function () {
  const guess = Number(guessInputEl.value);
  if (!guess) return setMessage('No number!');
  if (guess < MIN_NUMBER || guess > MAX_NUMBER)
    return setMessage(
      `Number must be between ${MIN_NUMBER} and ${MAX_NUMBER}!`
    );

  if (guess === secretNumber) {
    setMessage('🎉 Correct Number!');
    setNumber(secretNumber);
    setBackground('green');
    if (score > highscore) {
      highscore = score;
      setHighscore(highscore);
    }
    disablePlay(true);
    clearInput();
    return; // early exit
  }
  setMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
  score--;
  setScore(score);

  if (score < 1) {
    setMessage('💥 You lost!');
    setNumber(secretNumber);
    setBackground('red');
    disablePlay(true);
    clearInput();
  }
});

againBtnEl.addEventListener('click', function () {
  resetGameState();
  renderInitialUI();
});
// Enter key submits when possible
window.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && !checkBtnEl.disabled) {
    checkBtnEl.click();
  }
});
againBtnEl.addEventListener('click', function () {
  guessInputEl.focus();
});