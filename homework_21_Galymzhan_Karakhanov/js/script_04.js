//* 4 Задание 

function power(num, exponent = 2) {

  let assign = 1;
  for (let i = 0; i < exponent; i++) {
    assign *= num;
  }
  return assign;
}

let x = parseInt (prompt("Введите цифру: "));
let y = parseInt(prompt("Введите показатель степени: "));

if (y === null || y === '') {
  console.log(power(x , y = exponent || 2));
} else {
  console.log(power(x, y));
}
