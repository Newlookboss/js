const num = $("#string-3");
const num1 = $("#string-5");
const num2 = $("#string-2");
const num3 = $("#string-6");
const num4 = $("#string-4");
const num5 = $("#string-1");

const string = [
  num.text(),
  num1.text(),
  num2.text(),
  num3.text(),
  num4.text(),
  num5.text(),
];

for (let i = 0; i < string.length; i++) {
  console.log(string[i]);
}
