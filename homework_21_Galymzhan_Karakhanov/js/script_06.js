function average(meaning) {
  let sum = 0;
  for (let i = 0; i < meaning.length; i++) {
    sum += meaning[i];
  }
  return sum / meaning.length;
}

const southData = [13, 15, 19, 26, 21, 22, 23];
const westData = [15, 14, 16, 18, 17, 24, 25];
const eastData = [20, 17, 19, 15, 24, 25, 26];
const northData = [19, 18, 23, 20, 23, 19, 31];

const southAverage = average(southData);
const westAverage = average(westData);
const eastAverage = average(eastData);
const northAverage = average(northData);

console.log("Южная Средняя:", southAverage);
console.log("Западный средний:", westAverage);
console.log("Восточная Средняя:", eastAverage);
console.log("Cевер cредний:", northAverage);
