// *2 Задание

function validatNumber() {
	
  let input = prompt("Введите целое число: ");
  if (input === null) {
    return "Вы нажали 'Отмена'";
  } else if (isNaN(input)) {
    return "Вы ввели не число";
  } else if (input == 0) {
    return "Вы ввели ноль";
  } else if (input > 0) {
    return "Вы ввели положительное число";
  } else {
    return "Вы ввели отрицательное число";
  }
}

alert(validatNumber());
