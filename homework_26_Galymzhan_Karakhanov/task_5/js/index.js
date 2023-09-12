function drawCircles(numCircles) {
  const oval = document.createElement("div");
  const maxDiameter = 200;
  const minDiameter = 50;
  oval.style.width = "1024px";
  oval.style.height = "768px";
  oval.style.position = "relative";

  const colors = [
    "red",
    "green",
    "yellow",
    "black",
    "salmon",
    "gold",
    "indigo",
    "chocolate",
    "darkblue",
    "blue",
  ];

  for (let i = 0; i < numCircles; i++) {
    const circle = document.createElement("div");
    const diameter = Math.floor(
      Math.random() * (maxDiameter - minDiameter) + minDiameter
    );
    const x = Math.floor(Math.random() * (window.innerWidth - diameter));
    const y = Math.floor(Math.random() * (window.innerHeight - diameter));
    const color = colors[Math.floor(Math.random() * colors.length)];

    circle.style.width = diameter + "px";
    circle.style.height = diameter + "px";
    circle.style.borderRadius = "50%";
    circle.style.position = "absolute";
    circle.style.top = y + "px";
    circle.style.left = x + "px";
    circle.style.backgroundColor = color;

    oval.appendChild(circle);
  }
  return oval;
}
