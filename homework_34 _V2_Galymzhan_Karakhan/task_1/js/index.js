const form = document.querySelector(".form");
const countryInput = form.querySelector('input[name="country"]');
const preloader = document.querySelector("#preloader");
const borderingCountries = document.querySelector("#bordering-countries");
const countryInfo = document.querySelector(".country-info");

async function getCountryData(countryName) {
  const response = await fetch(
    `https://restcountries.com/v2/name/${countryName}`
  );
  if (!response.ok) {
    throw new Error(response.status);
  }
  const data = await response.json();
  return data[0];
}

async function getBorderData(code) {
  const response = await fetch(`https://restcountries.com/v2/alpha/${code}`);
  if (!response.ok) {
    throw new Error(response.status);
  }
  const data = await response.json();
  return data;
}
async function checkWindspeedData(data) {
  const [winddir16Point, windspeedKmph] = data.split(" ");
  if (windspeedKmph && windspeedKmph !== "undefined") {
    return { winddir16Point, windspeedKmph };
  } else {
    return { winddir16Point, windspeedKmph: "" };
  }
}

async function getCapitalData(capital) {
  const response = await fetch(`https://wttr.in/${capital}?format=%C+%t+%w`);
  if (!response.ok) {
    throw new Error(response.status);
  }
  const data = await response.text();
  const [weatherDesc, temp_C, wind] = data.split(" ");
  const windData = await checkWindspeedData(wind);
  return { weatherDesc, temp_C, ...windData };
}

async function displayCountryInfo(country) {
  const weather = await getCapitalData(country.capital);
  const info = `<br><br>
		<strong>Country :</strong> ${country.name} <br>
		<strong> Capital:</strong> ${country.capital}<br>
		<strong>Current weather:</strong> ${weather.weatherDesc},  ${weather.temp_C} ° Wind: ${weather.winddir16Point} ${weather.windspeedKmph !== "" ? `${weather.windspeedKmph} km/h` : "" }
		<br><br><br>   `;

  countryInfo.innerHTML = info;
  countryInfo.style.fontSize = "20px";
}

async function displayBorderInfo(country) {
  borderingCountries.innerHTML =
    "<strong>Bordering countries: </strong> <br> <br> ";

  const countriesPromises = country.borders.map((code) => getBorderData(code));
  const weatherPromises = country.borders.map(async (code) => {
		const data = await getBorderData(code);
		return getCapitalData(data.capital);});

  const countriesData = await Promise.all(countriesPromises);
  const weatherData = await Promise.all(weatherPromises);

  for (let i = 0; i < countriesData.length; i++) {
    const country = countriesData[i];
    const weather = weatherData[i];


    const info = `
		<strong>Country name:</strong> ${country.name} <br>
		 `;
    const infoLi = `
		<strong> Capital:</strong> ${country.capital}<br>
		<strong>Current weather:</strong> ${weather.weatherDesc},  ${weather.temp_C} ° Wind: ${weather.winddir16Point} ${weather.windspeedKmph !== "" ? `${weather.windspeedKmph} km/h` : "" }
		<br><br><br>   `;

    const listItem = document.createElement("li");
    listItem.innerHTML = info;
    const list = document.createElement("li");

    list.innerHTML = infoLi;
    const ul = document.createElement("ul");
    ul.appendChild(list);
    listItem.appendChild(ul);
    borderingCountries.appendChild(listItem);
  }
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  preloader.style.display = "block";
  const countryName = countryInput.value.trim();
  if (!countryName) return;

  const country = await getCountryData(countryName);
  await displayCountryInfo(country);
  await displayBorderInfo(country);
  preloader.style.display = "none";
});
