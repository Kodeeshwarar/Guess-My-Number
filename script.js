'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';
  } else if (secretNumber === guess) {
    document.querySelector('.number').textContent = secretNumber;
    // document.querySelector('.message').textContent = '🎉 Correct Number';
    displayMessage('🎉 Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.highscore').textContent = score;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (secretNumber !== guess) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too High !' : '📉 Too Low !';

      displayMessage(guess > secretNumber ? '📈 Too High !' : '📉 Too Low !');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '😭 you lost your game';
      displayMessage('😭 you lost your game');
    }
  }
});

//   } else if (guess > secretNumber) {
//     document.querySelector('.message').textContent = '📈 Too High';
//     score--;
//     document.querySelector('.score').textContent = score;
//     if (score < 1) {
//       document.querySelector('.message').textContent = '😭 you lost your game';
//     }
//   } else if (guess < secretNumber) {
//     document.querySelector('.message').textContent = '📉 Too Low';
//     score--;
//     document.querySelector('.score').textContent = score;
//     if (score < 1) {
//       document.querySelector('.message').textContent = 'you lost your game';
//     }
//   }

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;

  // document.querySelector('.message').textContent = 'start guessing';
  displayMessage('start guessing');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
