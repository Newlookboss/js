// Получение данных из API
fetch('https://restcountries.com/v2/all?fields=alpha2Code,flag,name,capital,population')
  .then(response => response.json())
  .then(data => {
    const countriesTable = document.getElementById('countries-table');

   
    data.forEach(country => {
      const row = document.createElement('tr');

      const codeCell = document.createElement('td');
      codeCell.textContent = country.alpha2Code;
      row.appendChild(codeCell);

      const flagCell = document.createElement('td');
      const flagImage = document.createElement('img');
      flagImage.src = country.flag;
      flagImage.width = 50;
      flagCell.appendChild(flagImage);
      row.appendChild(flagCell);

      const nameCell = document.createElement('td');
      nameCell.textContent = country.name;
      row.appendChild(nameCell);

      const capitalCell = document.createElement('td');
      capitalCell.textContent = country.capital;
      row.appendChild(capitalCell);

      const populationCell = document.createElement('td');
      populationCell.textContent = country.population.toLocaleString();
      row.appendChild(populationCell);

      countriesTable.appendChild(row);
    });
  })
  .catch(error => console.log(error));
