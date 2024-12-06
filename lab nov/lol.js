let secretNumber, lowerLimit, upperLimit, attempts;

function startGame() {
  lowerLimit = parseInt(document.getElementById('lowerLimit').value, 10);
  upperLimit = parseInt(document.getElementById('upperLimit').value, 10);

  if (isNaN(lowerLimit) || isNaN(upperLimit) || lowerLimit >= upperLimit) {
    document.getElementById('result').textContent = "Некоректний діапазон. Введіть правильні межі.";
    return;
  }

  secretNumber = Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
  attempts = 0;

  document.getElementById('gameSetup').style.display = 'none';
  document.getElementById('gamePlay').style.display = 'block';
  document.getElementById('result').textContent = '';
  document.getElementById('feedback').textContent = '';
}

function makeGuess() {
  const guess = parseInt(document.getElementById('guessInput').value, 10);

  if (isNaN(guess)) {
    document.getElementById('feedback').textContent = "Будь ласка, введіть ціле число.";
    return;
  }

  attempts++;

  if (guess < secretNumber) {
    document.getElementById('feedback').textContent = "Моє число більше!";
  } else if (guess > secretNumber) {
    document.getElementById('feedback').textContent = "Моє число менше!";
  } else {
    document.getElementById('feedback').textContent = '';
    document.getElementById('result').textContent = `Вітаємо! Ви вгадали число ${secretNumber} за ${attempts} спроб(и).`;
    document.getElementById('gamePlay').style.display = 'none';
    document.getElementById('gameSetup').style.display = 'block';
  }

  document.getElementById('guessInput').value = '';
}
