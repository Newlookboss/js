const elements = document.getElementsByClassName("element");

for (let i = 0; i < elements.length; i++) {
  if (i < 3) {
    elements[i].style.color = "red";
  } else {
    elements[i].style.color = "green";
  }
}
