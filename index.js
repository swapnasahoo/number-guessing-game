// get player name from localStorage
const playerName = localStorage.getItem('playerName') || 'Player';
document.getElementById('wlc-name-header').textContent =
  'Hello, ' + playerName + ' 👋';

let guess;
let minNum = 1;
let maxNum = 100;
let attempts = 0;
let answer = Math.floor(Math.random() * maxNum - minNum + 1);

document.getElementById('btn-guess').onclick = function () {
  guess = document.getElementById('input-guess').value;
  let maxattempts = 10;
  guess = Number(guess);
  if (isNaN(guess)) {
    document.getElementById('error-message').innerText =
      'Please enter a valid number';
  } else if (guess < minNum || guess > maxNum) {
    document.getElementById('error-message').innerText =
      'Please enter a number between 1 and 100';
  } else if (attempts === maxattempts) {
    document.getElementById('error-message').innerText =
      'Oops out of guess, Refresh the game to try again';
  } else {
    attempts++;
    if (guess < answer) {
      document.getElementById('error-message').innerText = 'Too low! Try again';
    } else if (guess > answer) {
      document.getElementById('error-message').innerText =
        'Too high! Try again';
    }
  }
  if (guess === answer) {
    document.getElementById('input-guess').disabled = true;
    document.getElementById('btn-guess').disabled = true;
document.getElementById("btn-guess"). innerText = "You won, Refresh to play again"; 

    if (attempts >= 1 && attempts < 3) {
      document.getElementById(
        'error-message'
      ).innerText = `🎉 Congrats, you nailed it!🔥 The answer was ${answer} — you crushed it in just ${attempts} attempts!`;
    } else if (attempts >= 3 && attempts < 7) {
      document.getElementById(
        'error-message'
      ).innerText = `🥳 Great job! You figured it out — the answer was ${answer}. You took ${attempts} attempts.`;
    } else if (attempts >= 7 && attempts < 10) {
      document.getElementById(
        'error-message'
      ).innerText = `😊 You did it! The answer was ${answer} — took ${attempts} attempts, but you stayed with it.`;
    }
  }
};
