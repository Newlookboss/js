function guessNumber() {
  const number = Math.floor(Math.random() * 100) + 1;
  let steps = 0;

  while (true) {
    const guess = prompt("Введите число от 1 до 100:");

    if (guess === null) {
      console.log("Вы вышли из игры.");
      return;
    }

    const parsedGuess = parseInt(guess);

    if (isNaN(parsedGuess) || parsedGuess < 1 || parsedGuess > 100) {
      console.log("Вы ввели некорректное значение. Попробуйте еще раз.");
      continue;
    }

    steps++;

    if (parsedGuess > number) {
      console.log("Меньше");
    } else if (parsedGuess < number) {
      console.log("Больше");
    } else {
      console.log("Угадали!");
      console.log(`Потребовалось ${steps} попыток.`);
      return;
    }
  }
}
guessNumber()