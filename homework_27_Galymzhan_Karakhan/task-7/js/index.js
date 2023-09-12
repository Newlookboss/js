function computerGuesses() {
  let min = 1;
  let max = 100;
  let guess;
  let numGuesses = 0;

  console.log("Загадайте число от 1 до 100. Я попробую отгадать его.");

  while (true) {
    guess = Math.floor((min + max) / 2);
    numGuesses++;
    console.log("Это число " + guess + "?");
    let input = prompt("Больше, меньше или да? ");

    if (input === "да") {
      console.log(
        "Ура! Я угадал число " + guess + " за " + numGuesses + " попыток."
      );
      break;
    } else if (input === "больше") {
      min = guess + 1;
    } else if (input === "меньше") {
      max = guess - 1;
    } else {
      console.log("Неизвестный ответ. Попробуйте еще раз.");
    }
  }
}

function userGuesses() {
  let answer = Math.floor(Math.random() * 100) + 1;
  let guess;
  let numGuesses = 0;

  console.log("Я загадал число от 1 до 100. Попробуйте угадать его.");

  while (true) {
    guess = parseInt(prompt("Какое число я загадал? "));
    numGuesses++;

    if (guess === answer) {
      console.log(
        "Поздравляю! Вы угадали число " +
          answer +
          " за " +
          numGuesses +
          " попыток."
      );
      break;
    } else if (guess < answer) {
      console.log("Больше.");
    } else if (guess > answer) {
      console.log("Меньше.");
    } else {
      console.log("Неизвестный ответ. Попробуйте еще раз.");
    }
  }
}

function playGame() {
  let numRounds = parseInt(
    prompt("Сколько раундов вы хотите сыграть? (от 1 до 10) ")
  );

  let userWins = 0;
  let computerWins = 0;

  for (let i = 0; i < numRounds; i++) {
    console.log("Раунд " + (i + 1) + ":");
    let input = prompt(
      'Кто загадывает число? (введите "1" для пользователя, "2" для компьютера) '
    );

    if (input === "1") {
      userGuesses();
      userWins++;
    } else if (input === "2") {
      computerGuesses();
      computerWins++;
    } else {
      console.log("Неизвестный ответ. Попробуйте еще раз.");
      i--;
    }
  }

  console.log("Игра окончена.");
  console.log(
    "Счет: Пользователь " + userWins + ", Компьютер " + computerWins + "."
  );

  if (userWins > computerWins) {
    console.log("Поздравляю! Вы выиграли игру!");
  } else if (userWins < computerWins) {
    console.log("К сожалению вы проиграли");
  } else {
    console.log("Ничья!");
  }
}

// Игра по очереди
function playGame() {
  let rounds = prompt("Сколько раундов вы хотите сыграть? (от 1 до 10)");
  if (!rounds || rounds < 1 || rounds > 10) {
    rounds = 3;
  }

  let userWins = 0;
  let computerWins = 0;

  for (let i = 1; i <= rounds; i++) {
    console.log(`Раунд ${i}!`);
    if (i % 2 !== 0) {
      // Пользователь загадывает число
      const userNumber = userGuesses();
      console.log("Компьютер угадывает ваше число...");
      const computerSteps = guessNumber(userNumber);
      console.log(`Компьютер отгадал ваше число за ${computerSteps} шагов!`);
      if (computerSteps < 8) {
        console.log("Компьютер - молодец!");
        computerWins++;
      } else {
        console.log("Компьютер - неплохой, но мог быть и лучше.");
      }
    } else {
      // Компьютер загадывает число
      console.log("Загадайте число от 1 до 100...");
      const computerNumber = generateRandomNumber();
      let userSteps = 0;
      while (true) {
        userSteps++;
        const userGuess = getUserGuess();
        if (userGuess === computerNumber) {
          console.log(
            `Вы угадали число ${computerNumber} за ${userSteps} попыток!`
          );
          if (userSteps < 8) {
            console.log("Поздравляю, вы молодец!");
            userWins++;
          } else {
            console.log("Вы справились, но могли бы и лучше.");
          }
          break;
        } else if (userGuess < computerNumber) {
          console.log("Загаданное число больше!");
        } else {
          console.log("Загаданное число меньше!");
        }
      }
    }
  }

  // Определение победителя
  if (userWins > computerWins) {
    console.log("Поздравляю! Вы выиграли игру!");
  } else if (userWins < computerWins) {
    console.log("К сожалению, вы проиграли игру. Попробуйте еще раз!");
  } else {
    console.log("Ничья!");
  }
}

playGame();
