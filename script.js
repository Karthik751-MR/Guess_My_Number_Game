'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉Correct Number!🎉';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 15;
console.log(document.querySelector('.guess').value);


const x = function () {
    document.querySelector('.guess').value = 11;
    console.log(document.querySelector('.guess').value);
}

let secretNumber = Math.trunc(Math.random() * 100) + 1;

let score = 20;

let highScore = 0;


document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 100) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '❔';
    document.querySelector('.message').textContent = '🎮 Start Guessing... 🎮';
});

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = '❌ Please Enter a Number!';
    }

    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉You Guessed it! Well Done!🎉';
        if (score > highScore) highScore = score;
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.highscore').textContent = highScore;
        document.querySelector('.number').style.width = '25rem';
        
    }

    else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📈Too High! Try Again.📈';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "💔 Game Over! Try Again!";
            document.querySelector('.score').textContent = 0;
        }
    }

    else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📉Too Low! Try Again.📉';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = `💔 Game Over! Try Again!`;
            document.querySelector('.score').textContent = 0;
        }
    }
}); 

Coding Challenge 1
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀

Refractor Code : 

*/

let secretNumber = Math.trunc(Math.random() * 100) + 1;


let score = 20;
let highScore = 0;

const displayScore = function (s) {
    document.querySelector('.score').textContent = s;
}

const displayMessage = function (msg) {
    document.querySelector('.message').textContent = msg;
}

const hiddenNumber = function (sn) {
    document.querySelector('.number').textContent = sn;
}

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 100) + 1;
    displayMessage('🎮 Start Guessing... 🎮')
    displayScore(score);
    hiddenNumber('❔');
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess)
        displayMessage('❌ Please Enter a Number!');

    else if (guess === secretNumber) {
        displayMessage('🎉You Guessed it! Well Done!🎉');
        if (score > highScore) highScore = score;
        document.querySelector('.highscore').textContent = highScore;
        hiddenNumber(secretNumber);
        document.querySelector('.number').style.width = '25rem';
    }

    else if (guess !== secretNumber) {
        if (score > 1) {
            (guess > secretNumber) ? displayMessage('📈Too High! Try Again.📈') : displayMessage('📉Too Low! Try Again.📉');
            score--;
            displayScore(score);
        } else {
            displayMessage('💔 Game Over! Try Again!');
            displayScore(0);
        }
    }
});

