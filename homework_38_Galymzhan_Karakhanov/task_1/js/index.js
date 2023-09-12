async function* asyncGenerator(items, fetchFn) {
  for (const item of items) {
    yield await fetchFn(item);
  }
}

async function fetchCountryData(countryName) {
  const response = await fetch(
    `https://restcountries.com/v2/name/${countryName}`
  );
  return response.json();
}

async function fetchWeatherData(capital) {
  const response = await fetch(`https://wttr.in/${capital}?format=j1`);
  return response.json();
}

async function* asyncIterator(items, fetchFn) {
  const gen = asyncGenerator(items, fetchFn);
  while (true) {
    const next = await gen.next();
    if (next.done) {
      break;
    }
    yield next.value;
  }
}

document.getElementById("search-btn").addEventListener("click", async () => {
  const countryName = document.getElementById("country-input").value;
  const output = document.getElementById("output");
  const preloader = document.getElementById("preloader");
  preloader.style.display = "block";
  output.innerHTML = "";

  try {
    const countryData = await fetchCountryData(countryName);
    const mainCountry = countryData[0];
    const weatherData = await fetchWeatherData(mainCountry.capital);
    const currentWeather = weatherData.current_condition[0];
    output.innerHTML += `Country: ${mainCountry.name}<br>Capital: ${mainCountry.capital}<br>Current weather: ${currentWeather.weatherDesc[0].value}, 
${currentWeather.temp_C}° Wind: ${currentWeather.winddir16Point} ${currentWeather.windspeedKmph} km/h<br>Bordering countries:<br>`;

    const borderingCountriesIter = asyncIterator(
      mainCountry.borders,
      async (border) => {
        const country = await fetch(
          `https://restcountries.com/v2/alpha/${border}`
        ).then((res) => res.json());
        const weather = await fetchWeatherData(country.capital);
        const borderWeather = weather.current_condition[0];
        return {
          name: country.name,
          capital: country.capital,
          weatherDesc: borderWeather.weatherDesc[0].value,
          temp_C: borderWeather.temp_C,
          winddir16Point: borderWeather.winddir16Point,
          windspeedKmph: borderWeather.windspeedKmph,
        };
      }
    );

    for await (const country of borderingCountriesIter) {
      output.innerHTML += `Country name: ${country.name}<br>Capital: ${country.capital}<br>Current weather: ${country.weatherDesc}, 
  ${country.temp_C}° Wind: ${country.winddir16Point} ${country.windspeedKmph} km/h<br>`;
    }
  } catch (error) {
    output.innerHTML = "Error: " + error.message;
  } finally {
    preloader.style.display = "none";
  }
});
