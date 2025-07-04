
const apiKey = '3b3ccc0508e3d2e3ca04abb939b84c72'; 

document.getElementById('btn').addEventListener('click', function () {
  const city = document.getElementById('cityInput').value;
  if (city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.cod === 200) {
          const weatherInfo = `
           
            <hr>
            <p><strong>City name:</strong> ${data.name}</p>
            <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
            <p><strong>Weather:</strong> ${data.weather[0].description}</p>
            <hr>
          `;
          document.getElementById('data').innerHTML = weatherInfo;
        } else {
          document.getElementById('data').innerHTML = `<hr><p>City not found!</p><hr>`;
        }
      })
      .catch(error => {
        console.error('Error:', error);
        document.getElementById('data').innerHTML = `<p>Error in fetching data</p>`;
      });
  } else {
    document.getElementById('data').innerHTML = `<hr><p>Please enter a city name</p><hr>`;
  }
});