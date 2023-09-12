

//* 1 задание



let num1 = parseInt(prompt('Введите число:'));

let num2 = parseInt(prompt('Введите число:'));


if (num1 < num2) {
	alert("Первое число меньше второго.");
} else if (num1 > num2) {
	alert("Первое число больше второго.");
}else if (!num1 || !num2) {
	alert("Ошибка");
}else {
	alert("числа равны");
};


//* 2 задание

const inputName = prompt("Напишите слово: ");
const length = inputName.length;
const star = "*".repeat(length + 4);

console.log(star + "\n" + "* " + inputName + " *" +"\n"+ star);


//* 3 задание


let count = 0;
let sum = 0;

while (true) {
  let input = prompt("Введите число от 1 до 100: ");

  if (input === null) {
    console.log(`Количество введенных чисел: ${count}`);
    console.log(`Cреднее арифметическое: ${sum / count}`);
    break;
  }

  input = parseInt(input);

  if (isNaN(input) || input < 1 || input > 100) {
    console.log("Пожалуйста введите число от 1 до 100.");
    continue;
  }

  count++;
  sum += input;
};

// * 4 задание

let groups  = [0,0,0,0,0,0,0,0,0,0]
console.log("Number of samples: 100000");

for (let i = 0; i < 100000; i++) {
  let randomNum = Math.floor(Math.random() * 1000);
  groups[Math.floor(randomNum / 10)]++;

}

for (let i = 0; i < 10; i++) {
  console.log(`Group ${i * 10}-${i * 10 + 9}: ${groups[i]}`);
};


// *,...............

const Car = {

	color: 'red',

	model: 'Ford',

	price: 5000,

	getFullName: function() {

			return this.model + ' $' + this.price;

	}

};



console.log(Car.getFullName());







