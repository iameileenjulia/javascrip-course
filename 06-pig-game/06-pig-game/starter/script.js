'use strict';

console.log('Pig Game Ready!');

// game state variables
let scores, currentScore, activePlayer, playing;

// Select player 0 (player 1)
const player0E1 = document.querySelector('.player--0');

// Select player 1 (player 2)
const player1E1 = document.querySelector('.player--1');

// Select score elemnt
const score0E1 = document.querySelector('#score--0');

// select score 1 element 
const score1E1 = document.querySelector('#score--1');

const current0E1 = document.querySelector('#current--0');

const current1E1 = document.querySelector('#current--1');

const diceE1 = document.querySelector('.dice');

const btnRollEl = document.querySelector('.btn--roll');

// game initialization function

const init = function () {
    // start with both players having zero total score
    scores = [0, 0];

    // set current score to 0
    currentScore = 0;

    // set active player to 0 (player 1)
    activePlayer = 0;

    playing = true;

    // reset all the display
    score0E1.textContent = 0;

    score1E1.textContent = 0;

    current0E1.textContent = 0;
    
    current1E1.textContent = 0;

    diceE1.classList.add('hidden');
};

init();


btnRollEl.addEventListener('click', function () {
if (playing) {
    //.add.dice logic
    const dice = Math.trunc(Math.random() * 6) + 1;
    
    diceE1.classList.remove('hidden');

    diceE1.src = `dice-${dice}.png`;

    if (dice !== 1) {
        currentScore += dice;

        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        // handle rollin a 1
        currentScore = 0;

        document.getElementById(`current--${activePlayer}`).textContent = currentScore; 
    }
}
});