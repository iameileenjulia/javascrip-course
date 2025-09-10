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

document.querySelector('.check').addEventListener('click', function () {
  console.log('Check button clicked');

  const guess = Number(document.querySelector('.guess').value);
  console.log('Player guessed:', guess);

  if (guess === secretNumber) {
    console.log('Correct guess');
  document.querySelector('message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = secretNumber;
  } else if (guess < secretNumber){
    document.querySelector('.message').textContent = '📈 Too high!';
    score --;
  } else if (guess < secretNumber) {
    console.log('Too low!');
    document.querySelector('.message').textContent = '📉 Too low!';
    score --;
  }
});

