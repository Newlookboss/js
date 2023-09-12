const timer = document.getElementById("timer");
const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

let totalSeconds = 0;
let totalMinute = 0;
let intervalId = null;

function updateTimer() {
  totalSeconds++;
  const seconds = totalSeconds % 60;
  const minutes = Math.floor(totalMinute % 60);

  minutesSpan.textContent = formatNumber(minutes);
  secondsSpan.textContent = formatNumber(seconds);

  if (totalSeconds === 60) {
    totalSeconds = 0;
    totalMinute++;
    return (minutesSpan.textContent = formatNumber(minutes));
  } else if (totalMinute > 60) {
    totalMinute = 0;
  }
}

function formatNumber(number) {
  return number < 10 ? `0${number}` : number;
}

startButton.addEventListener("click", () => {
  if (!intervalId) {
    intervalId = setInterval(updateTimer, 1000);
  }
});

pauseButton.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});

resetButton.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  totalSeconds = 0;
  minutesSpan.textContent = "00";
  secondsSpan.textContent = "00";
});
