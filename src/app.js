function displayTemperature(response) {
   console.log(response.data);
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    temperatureElement.innerHTML = Math.round(response.data.temperature.current);
    cityElement.innerHTML = response.data.city;
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = response.data.temperature.humidity;
    windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apikey = "3c6eof27af57b08t26d5a0a1f6f02cc4";
let apiurl = 'https://api.shecodes.io/weather/v1/current?query=Sydney&key=3c6eof27af57b08t26d5a0a1f6f02cc4&units=metric';    


axios.get(apiurl).then(displayTemperature);