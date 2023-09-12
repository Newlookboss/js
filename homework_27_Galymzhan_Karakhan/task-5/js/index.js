function reverseGame() {
  let min = 1;
  let max = 100;
  let steps = 0;

  while (true) {
		 
    const guess = Math.floor((min + max) / 2);

    const response = prompt(`Это число ${guess}? (yes, greater, less)`);

    if (response === null) {
      console.log("Вы вышли из игры.");
      return;
    }

    if (response === "yes") {
      console.log(`Угадали за ${steps} попыток!`);
      return;
    }

    steps++;

    if (response === "greater") {
      min = guess + 1;
    } else if (response === "less") {
      max = guess - 1;
    }
  }
}
reverseGame()