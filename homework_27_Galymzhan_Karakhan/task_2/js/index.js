document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");
  const startButton = document.getElementById("start");
  const stopButton = document.getElementById("stop");

  let timer;
  let timerRunning = false;

  function addElement() {
    const element = document.createElement("div");
    element.className = "element";
    element.innerHTML = Math.floor(Math.random() * 20 + 1);
    container.appendChild(element);
  }

  function startTimer() {
    if (!timerRunning) {
      timer = setInterval(addElement, 5000);
      timerRunning = true;
    }
  }

  function stopTimer() {
    if (timerRunning) {
      clearInterval(timer);
      timerRunning = false;
    }
  }

  startButton.addEventListener("click", startTimer);
  stopButton.addEventListener("click", stopTimer);

  startTimer();
});
