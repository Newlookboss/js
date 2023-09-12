document.getElementById('search-btn').addEventListener('click', async () => {
	const countryName = document.getElementById('country-input').value;
	const output = document.getElementById('output');
	const preloader = document.getElementById('preloader');
	preloader.style.display = 'block';
	output.innerHTML = '';

	try {
			const countryData = await fetch(`https://restcountries.com/v2/name/${countryName}`).then(res => res.json());
			const mainCountry = countryData[0];
			const weatherData = await fetch(`https://wttr.in/${mainCountry.capital}?format=j1`).then(res => res.json());
			const currentWeather = weatherData.current_condition[0];

			output.innerHTML += `Country: ${mainCountry.name}<br>Capital: ${mainCountry.capital}<br>Current weather: ${currentWeather.weatherDesc[0].value}, 
			${currentWeather.temp_C}° Wind: ${currentWeather.winddir16Point} ${currentWeather.windspeedKmph} km/h<br>Bordering countries:<br>`;

			const borderingCountries = await Promise.all(mainCountry.borders.map(border => fetch(`https://restcountries.com/v2/alpha/${border}`).then(res => res.json())));

			for (const country of borderingCountries) {
					const weather = await fetch(`https://wttr.in/${country.capital}?format=j1`).then(res => res.json());
					const borderWeather = weather.current_condition[0];
					output.innerHTML += `Country name: ${country.name}<br>Capital: ${country.capital}<br>Current weather: ${borderWeather.weatherDesc[0].value}, 
					${borderWeather.temp_C}° Wind: ${borderWeather.winddir16Point} ${borderWeather.windspeedKmph} km/h<br>`;
			}
	} catch (error) {
			output.innerHTML = 'Error: ' + error.message;
	} finally {
			preloader.style.display = 'none';
	}
});