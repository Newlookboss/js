const pokemonList = document.getElementById("pokemon-list");
const pokemonInfo = document.getElementById("pokemon-info");
const previousBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");

let currentUrl = "https://pokeapi.co/api/v2/pokemon/";

async function fetchPokemon(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function fetchPokemonList(url) {
  const data = await fetchPokemon(url);
  currentUrl = url;

  previousBtn.disabled = !data.previous;
  nextBtn.disabled = !data.next;

  pokemonList.innerHTML = "";
  for (const item of data.results) {
    const listItem = document.createElement("a");
    listItem.href = "#";
    listItem.textContent = item.name;
    listItem.onclick = (event) => {
      event.preventDefault();
      showPokemonInfo(item.url);
    };
    pokemonList.appendChild(listItem);
  }
}

async function showPokemonInfo(url) {
  const data = await fetchPokemon(url);
  pokemonInfo.innerHTML = `
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <p>Имя: ${data.name}</p>
        <p>Тип: ${data.types.map((type) => type.type.name).join(", ")}</p>
        <p>Рост: ${data.height}</p>
        <p>Вес: ${data.weight}</p>
      `;
}

previousBtn.onclick = async () => {
  await fetchPokemonList(currentUrl);
  const previousUrl = new URL(currentUrl);
  previousUrl.searchParams.set(
    "offset",
    Math.max(0, parseInt(previousUrl.searchParams.get("offset") || 0) - 20)
  );
  fetchPokemonList(previousUrl.href);
};

nextBtn.onclick = async () => {
  await fetchPokemonList(currentUrl);
  const nextUrl = new URL(currentUrl);
  nextUrl.searchParams.set(
    "offset",
    parseInt(nextUrl.searchParams.get("offset") || 0) + 20
  );
  fetchPokemonList(nextUrl.href);
};

fetchPokemonList(currentUrl);

// Метод `set()` применяется к объекту `searchParams`, который является экземпляром класса `URLSearchParams`. Этот метод позволяет устанавливать или изменять значения параметров URL-запроса.

// В данном контексте, `previousUrl.searchParams.set()` используется для установки или изменения значения параметра "offset" в объекте `previousUrl`.

// Метод `set()` принимает два аргумента:
// 1. Имя параметра, значение которого нужно установить или изменить.
// 2. Значение, которое следует присвоить этому параметру.

// В данном случае, метод `set()` вызывается с аргументами "offset" и выражением, которое определяет новое значение "offset":

// ```javascript
// previousUrl.searchParams.set(
//   "offset",
//   Math.max(0, parseInt(previousUrl.searchParams.get("offset") || 0) - 20)
// );
// ```

// Таким образом, метод `set()` используется для изменения значения параметра "offset" в объекте URL на основе текущего значения "offset" с учетом вычитания 20 и проверки на то, чтобы значение не стало отрицательным. 
// `searchParams` — это свойство объекта `URL`, которое предоставляет доступ к экземпляру класса `URLSearchParams`. Этот класс позволяет работать с параметрами URL-запроса, выполнять их добавление, удаление, изменение и получение.
// https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20
//   !                               _______                 
// `searchParams` предоставляет методы для манипуляции с параметрами URL-запроса, такие как:

// 1. `get(name)` - получение значения параметра по имени.
// 2. `set(name, value)` - установка или изменение значения параметра по имени.
// 3. `append(name, value)` - добавление нового параметра с указанным именем и значением.
// 4. `delete(name)` - удаление параметра по имени.
// 5. `has(name)` - проверка наличия параметра с указанным именем.

// Используя свойство `searchParams`, можно легко работать с параметрами URL-запроса без необходимости разбирать и собирать URL вручную. В данном случае, `searchParams` используется для изменения значения параметра "offset" в объекте `previousUrl` с помощью метода `set()`.
