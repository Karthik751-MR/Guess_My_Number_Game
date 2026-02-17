'use strict';

const MAX_NUMBER = 100;
const INITIAL_SCORE = 20;

const guessInput = document.querySelector('.guess');
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const numberEl = document.querySelector('.number');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

let secretNumber = generateSecretNumber();
let score = INITIAL_SCORE;
let highScore = 0;

function generateSecretNumber() {
  return Math.trunc(Math.random() * MAX_NUMBER) + 1;
}

function displayMessage(message) {
  messageEl.textContent = message;
}

function updateScore(nextScore) {
  score = nextScore;
  scoreEl.textContent = score;
}

function resetGame() {
  secretNumber = generateSecretNumber();
  updateScore(INITIAL_SCORE);
  numberEl.textContent = '❔';
  numberEl.style.width = '15rem';
  guessInput.value = '';
  displayMessage('🎮 Start Guessing... 🎮');
}

function revealWinState() {
  displayMessage('🎉 You guessed it! Well done! 🎉');
  numberEl.textContent = secretNumber;
  numberEl.style.width = '25rem';

  if (score > highScore) {
    highScore = score;
    highscoreEl.textContent = highScore;
  }
}

function evaluateGuess() {
  const guess = Number(guessInput.value);

  if (!guess) {
    displayMessage('❌ Please enter a valid number.');
    return;
  }

  if (guess < 1 || guess > MAX_NUMBER) {
    displayMessage(`⚠️ Number must be between 1 and ${MAX_NUMBER}.`);
    return;
  }

  if (guess === secretNumber) {
    revealWinState();
    return;
  }

  if (score > 1) {
    displayMessage(guess > secretNumber ? '📈 Too high! Try again.' : '📉 Too low! Try again.');
    updateScore(score - 1);
    return;
  }

  updateScore(0);
  displayMessage('💔 Game over! Try again!');
}

checkBtn.addEventListener('click', evaluateGuess);
againBtn.addEventListener('click', resetGame);
guessInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') evaluateGuess();
});
