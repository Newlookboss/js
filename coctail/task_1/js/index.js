const inputCocktail = document.querySelector("#inputCocktail");
const buttonCocktail = document.querySelector("#buttonCoctail");
const cocktailInfo = document.querySelector(".cocktail-info");
const preloader = document.querySelector("#preloader");

async function fetchCocktailData(currentUrl) {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${currentUrl}`
  );

  if (!response.ok) {
    throw new Error(response.status);
  }

  const data = await response.json();
  return data.drinks;
}

async function showCocktailInfo(url) {
  const data = await fetchCocktailData(url);
  cocktailInfo.innerHTML = "";

  for (const item of data) {
    const divContainer = document.createElement("div");
    divContainer.classList = "cocktail-img";
    divContainer.innerHTML = `
      <img src="${item.strDrinkThumb}" alt="${item.strDrink}">
      <h2> ${item.strDrink}</h2>
    `;
    cocktailInfo.appendChild(divContainer);

    function getIngredientsAndMeasures(item) {
      let ingredientsAndMeasures = "";
      for (let i = 1; i <= 15; i++) {
        const ingredient = item[`strIngredient${i}`];
        const measure = item[`strMeasure${i}`];
        if (ingredient && measure) {
          ingredientsAndMeasures += `
						<div>
						<img src="https://www.thecocktaildb.com/images/ingredients/${ingredient}.png" alt="${ingredient}" width="50" height="50"><span > - ${ingredient} (${measure})</span></div>
					`;
        } else if (ingredient) {
          ingredientsAndMeasures += `
					<div><img src="https://www.thecocktaildb.com/images/ingredients/${ingredient}.png" alt="${ingredient}" width="50" height="50"><span > - ${ingredient}</span></div>
					`;
        } else {
          break;
        }
      }
      return ingredientsAndMeasures;
    }
    divContainer.onclick = () => {
      function showModal(title, content) {
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
        myAlert.style.minHeight = "500px";
        myAlert.style.backgroundColor = "white";
        myAlert.style.transform = "translate( -50% , -50% )";
        myAlert.style.padding = "20px";
        myAlert.style.borderRadius = "5px";
        myAlert.style.boxShadow = "5px 5px 52px rgba(253,95,0,0.4) ";
        document.body.appendChild(myAlert);

        const titleElement = document.createElement("h2");
        titleElement.innerHTML = title;
        titleElement.style.marginBottom = "30px";
        titleElement.style.fontSize = "20px";
        titleElement.style.fontWeight = "600";
        myAlert.appendChild(titleElement);

        if (typeof content === "string") {
          myAlert.innerHTML += content;
        } else if (typeof content === "object") {
          myAlert.appendChild(content);
        } else {
          myAlert.appendChild(content);
        }

        const myButtom = document.createElement("button");
        myButtom.innerText = "X";
        myButtom.style.position = "absolute";
        myButtom.style.top = "15px";
        myButtom.style.right = "15px";
        myButtom.style.background = "none";
        myButtom.style.fontSize = "15px";
        myButtom.style.fontWeight = "500";
        myButtom.style.border = "none";
        myButtom.addEventListener("click", function () {
          overlay.style.display = "none";
          myAlert.style.display = "none";
        });

        myAlert.appendChild(myButtom);

        overlay.addEventListener("click", function () {
          overlay.style.display = "none";
          myAlert.style.display = "none";
        });
      }
      showModal(
        "Coctail Info!",
        `
  <h1> <b>Ingredients:</b></h1>
  <p>${getIngredientsAndMeasures(item)}</p>
	<h2> <b>Instructions:</b></h2><br>
  <p> ${item.strInstructions}</p>
  `
      );
    };
  }
}

buttonCocktail.onclick = async (event) => {
  event.preventDefault();
  try {
    await showCocktailInfo(inputCocktail.value);
    inputCocktail.value = "";
  } catch (error) {
    console.error(error);
    alert("Произошла ошибка");
  }
};
