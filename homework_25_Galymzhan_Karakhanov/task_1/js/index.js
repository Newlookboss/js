const num = document.getElementById("string-3");
const num1 = document.getElementById("string-5");
const num2 = document.getElementById("string-2");
const num3 = document.getElementById("string-6");
const num4 = document.getElementById("string-4");
const num5 = document.getElementById("string-1");

const string = [
  num.innerText,
  num1.innerText,
  num2.innerText,
  num3.innerText,
  num4.innerText,
  num5.innerText,
];

for (let i = 0; i < string.length; i++) {
  console.log(string[i]);
}
