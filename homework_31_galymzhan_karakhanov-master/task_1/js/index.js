const translat = {
  name: "Название",
  topLevelDomain: "Домен верхнего уровня",
  alpha2Code: "Двузначный код",
  alpha3Code: "Трехзначный код",
  callingCodes: "Код страны телефонного номера",
  capital: "Столица",
  currencies: "Валюты",
  languages: "Языки",
  population: "Население",
  area: "Площадь",
  region: "Регион",
  subregion: "Подрегион",
  timezones: "Часовые пояса",
  flag: "Флаг",
  borders: "Граничит с",
  nativeName: "Наименование",
  numericCode: "Номер телефона",
  latlng: "Координаты",
  altSpellings: " Варианты написания",
  demonym: "Hазвания жителей",
  gini: "Коэффициент",
  translations: "Транскрипты",
	regionalBlocs: "Регионные блоки",
};

const form = document.querySelector(".form");
const countryInput = form.querySelector('input[name="country"]');
const preloader = document.querySelector(".preloader");
const countryInfo = document.querySelector(".country-info");

function getCountryInfo(event) {
  event.preventDefault();

  const country = countryInput.value.trim();

  if (!country) {
    alert("Введите название страны");
    return;
  }

  preloader.style.display = "block";

  fetch(`https://restcountries.com/v2/name/${country}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((data) => {
      const countryData = data[0];
      let html = "";

      for (const key in countryData) {


        if (key === "name") {
          html += `<h2>${countryData[key]}</h2>`;
        } 
				
				else if (key === "flag") {
          html += `<h2> Флаг:</h2><img src="${countryData[key]}" alt="${countryData.name} ">`;
        }
				
				else if (key === "currencies") {
          html += `<h3>${translat[key]}:</h3><ul>`;
          for (const currency of countryData[key]) {
            html += `<li>${currency.name} (${currency.code}) (${currency.symbol})</li>`;
          }
          html += `</ul>`;
        } 
				
				else if (key === "languages") {
          html += `<h3>${translat[key]}:</h3><ul>`;
          for (const language of countryData[key]) {
            html += `<li>${language.name} (${language.nativeName})</li>`;
          }
          html += `</ul>`;
        } 
				
				else if (key === "translations") {
          html += `<h3>${translat[key]}:</h3><ul>`;
          const translationsObj = countryData[key];
          for (const lang in translationsObj) {
            html += `<li>${translationsObj[lang]} </li>`;
          }
          html += `</ul>`;
        } 
				
				else if (key === "timezones") {
          html += `<h3>${translat[key]}:</h3><ul>`;
          for (const timezone of countryData[key]) {
            html += `<li>${timezone}</li>`;
          }
          html += `</ul>`;
        } 
				
				else if (key === "borders") {
          html += `<h3>${translat[key]}:</h3><ul>`;
          for (const border of countryData[key]) {
            html += `<li>${border}</li>`;
          }
          html += `</ul>`;
        } 
				
				else if (key === "regionalBlocs") {
					html += `<h3>${translat[key]}: </h3><ul>`;
					for (const bloc of countryData[key]) {
						html += `<li>${bloc.name} (${bloc.acronym})</li>`;
						if (bloc.otherAcronyms && bloc.otherAcronyms.length > 0) {
							html += `<ul><li>Other acronyms: ${bloc.otherAcronyms.join(', ')}</li></ul>`;
						}
					}
					html += `</ul>`;
				}
				else {
          const translation = translat[key];
          if (translation) {
            let value = countryData[key];
            if (Array.isArray(value)) {
              value = value.join(", ");
            }
            html += `<p><strong>${translation}:</strong> ${value}</p>`;
          }
        }
      }

      countryInfo.innerHTML = html;
    })
    .catch((error) => {
      console.error(error);
      alert("Произошла ошибка");
    })
    .finally(() => {
      preloader.style.display = "none";
    });
}

form.addEventListener("submit", getCountryInfo);
