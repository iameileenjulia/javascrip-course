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

const btnHoldEl = document.querySelector('.btn--hold');

const btnNewEl = document.querySelector('.btn--new');


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

    player0E1.classList.remove('player--winner');

    player1E1.classList.remove('player--winner');

    player0E1.classList.add('player--active');

    player1E1.classList.remove('player--active');
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
        switchPlayer();
    }
}
});

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;

    activePlayer = activePlayer === 0 ? 1 : 0;

player0E1.classList.toggle('player--active');
 player1E1.classList.toggle('player--active');
};

btnHoldEl.addEventListener('click', function () {
    if (playing && currentScore > 0) {
        // 1. Add current score to active player's score
        scores[activePlayer] += currentScore;
        
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    scores[activePlayer];
    if (scores[activePlayer] >= 100) {
        // finish the game
        playing = false;
        diceE1.classList.add('hidden');

        document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

        document.querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
        // switch to the next player
        switchPlayer();
    }
}
});

btnNewEl.addEventListener('click', init);
