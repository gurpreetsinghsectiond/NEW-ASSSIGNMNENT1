// Function to fetch weather data from WeatherAPI
function fetchWeather(city) {
    const apiKey = '2d6072e32650455bbef185252242210'; 
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => displayWeather(data))
        .catch(error => {
            document.getElementById('weather-container').innerHTML = `<p>${error.message}</p>`;
        });
}

// Function to display weather data on the webpage
function displayWeather(data) {
    const weatherContainer = document.getElementById('weather-container');
    const weatherDetails = `
        <h2>${data.location.name}</h2>
        <p>Temperature: ${data.current.temp_c} °C</p>
        <p>Weather: ${data.current.condition.text}</p>
        <p>Humidity: ${data.current.humidity}%</p>
        <p>Wind Speed: ${data.current.wind_kph} kph</p>
    `;
    weatherContainer.innerHTML = weatherDetails;
}

// Event listener for button click
document.getElementById('get-weather').addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    fetchWeather(city);
});
