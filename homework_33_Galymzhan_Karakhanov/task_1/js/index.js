const translat = {
  name: "Название",
  borders: "Граничит с",
};

const form = document.querySelector(".form");
const countryInput = form.querySelector('input[name="country"]');
const preloader = document.querySelector("#preloader");
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
    .then(async (data) => {
      const countryData = data[0];

      const borderPromises = countryData.borders.map((borderCode) =>
        fetch(`https://restcountries.com/v2/alpha/${borderCode}`).then(
          (response) => {
            if (!response.ok) {
              throw new Error(response.status);
            }
            return response.json();
          }
        )
      );

      const borderDatas = await Promise.all(borderPromises);

      countryData.borders = borderDatas.map((borderData) => borderData.name);
      return countryData;
    })
    .then((countryData) => {
      preloader.style.display = "none";
      let html = "";

      for (const key in countryData) {
        if (key === "name") {
          html += `<h2>${translat[key]}: ${countryData[key]}</h2>`;
        } else if (key === "borders") {
          html += `<h3>${translat[key]}:</h3><ul>`;
          for (const border of countryData[key]) {
            html += `<li>${border}</li>`;
          }
          html += `</ul>`;
        } else {
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
      preloader.style.display = "none";
      console.error(error);
      alert("Произошла ошибка");
    });
}

form.addEventListener("submit", getCountryInfo);

// const run = async () => {
//   const usersUrl = "https://api.github.com/search/users?q=sylvix";

//   const response = await fetch(usersUrl);

//   const users = await response.json();

//   console.log(users.items);
// };

// run();


