const nameElement = document.getElementById("name");
const regionElement = document.getElementById("region");
const subregionElement = document.getElementById("subregion");
const capitalElement = document.getElementById("capital");
const flagElement = document.getElementById("flag");
const countryNameElement = document.getElementById("country-name");
const showButton = document.getElementById("show");

showButton.addEventListener("click", () => {
  const countryName = countryNameElement.value;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `https://restcountries.com/v2/name/${countryName}`);
  xhr.onload = () => {
    if (xhr.status === 200) {
      const [countryData] = JSON.parse(xhr.responseText);
      nameElement.textContent = countryData.name;
      regionElement.textContent = countryData.region;
      subregionElement.textContent = countryData.subregion;
      capitalElement.textContent = countryData.capital;
      flagElement.innerHTML = `<img src="${countryData.flag}" alt="Flag of ${countryData.name}">`;
    } else {
      alert(`Error: ${xhr.status} ${xhr.statusText}`);
    }
  };
  xhr.send();
});
