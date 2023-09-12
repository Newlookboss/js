// * 5 Задание


function countChars(char, str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}


let letter = prompt("Введите букву: ");
let word = prompt("Введите слово: ");
let resultat = countChars(letter , word );
alert (resultat);



