// * 3 Задание

function multiply(a, b) {
  if (a === undefined || b === undefined) {
    return "Введите все значения";
  }
  let imitation = 0;
	
  for (let i = 0; i < b; i++) {
    imitation += a;
  }
  return imitation;
}

console.log(multiply(2, 5));
console.log(multiply(3, 3));
console.log(multiply(10, 12));
