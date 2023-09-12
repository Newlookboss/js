function showModal(title, content, callback) {
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.left = "0%";
  overlay.style.top = "0%";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba( 0, 0, 0, 0.5 )";

  document.body.appendChild(overlay);

  const myAlert = document.createElement("div");
  myAlert.style.position = "fixed";
  myAlert.style.left = "50%";
  myAlert.style.top = "50%";
  myAlert.style.width = "500px";
  myAlert.style.height = "150px";
  myAlert.style.backgroundColor = "white";
  myAlert.style.transform = "translate( -50% , -50% )";
  myAlert.style.padding = "20px";
  myAlert.style.borderRadius = "5px";
  myAlert.style.boxShadow = " 0 , 0 , 10px , rgba( 0, 0, 0, 0.5 ) ";
  document.body.appendChild(myAlert);

  const titleElement = document.createElement("h2");
  titleElement.innerHTML = title;
  myAlert.appendChild(titleElement);

  if (typeof content === "string") {
    myAlert.innerHTML += content;
  } else if (typeof content === "object") {
    myAlert.appendChild(content);
  }

  const myButtom = document.createElement("button");
  myButtom.innerText = "OKAY";
  myButtom.style.padding = "6px 10px";
  myButtom.style.borderRadius = "3px";
  myButtom.style.backgroundColor = "green";
  myButtom.style.color = "white";
  myButtom.style.fontSize = "15px";
  myButtom.style.fontWeight = "700";
  myButtom.style.border = "0px";
  myButtom.style.marginTop = "20px";
  myButtom.style.marginLeft = "440px";
  myButtom.addEventListener("click", function () {
    overlay.style.display = "none";
    myAlert.style.display = "none";

    if (callback) {
      callback();
    }
  });

  myAlert.appendChild(myButtom);

  overlay.addEventListener("click", function () {
    overlay.style.display = "none";
    myAlert.style.display = "none";
  });
}
showModal(
  "Alert!",
  "<div>This is a simple alert.</div> <div>with some <b>HTML</b> <i>contents</i></div>",
  function () {
    console.log("все четко");
  }
);
