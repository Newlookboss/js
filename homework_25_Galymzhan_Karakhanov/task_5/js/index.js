const parent = document.getElementById("cart-items");

const cocaCola = parent.querySelector(".item:nth-child(2)");
cocaCola.remove();

const chocolate = parent.querySelector(".item:nth-child(4)");

const cannedFish = document.createElement("div");
cannedFish.innerHTML = "Canned Fish";
const qty = document.createElement("span");
qty.className = "qty";
qty.innerHTML =  "x4";
cannedFish.appendChild(qty);
parent.appendChild(cannedFish);
parent.replaceChild(cannedFish, chocolate);
chocolate.remove();


