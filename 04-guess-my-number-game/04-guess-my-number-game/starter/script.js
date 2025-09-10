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


// BAsci Game logic

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

    document.body.style.backgroundColor = 'green';

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

// Again button logic
document.querySelector('.again').addEventListener('click', function () {
  console.log('Again button is Working');

  // Reset game state
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Reset UI
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  // Re-enable inputs
  document.querySelector('.guess').disabled = false;
  document.querySelector('.check').disabled = false;
  document.body.style.backgroundColor = '';
});


