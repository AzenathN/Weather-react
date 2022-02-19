import axios from "axios";
import React, { useState } from "react";

export default function SearchForm() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,

      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
      coordinates: response.data.coord,

      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `d72a05c8cd750bbf5b0d42daadb7570b`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeather);
  }

  function currentPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid={d72a05c8cd750bbf5b0d42daadb7570b}`;

    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function currentCity(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(currentPosition);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="City Search"
        onChange={updateCity}
        autoComplete="off"
      />
      <button type="Submit" className="form-btn+">
        {" "}
        Submit{" "}
      </button>
      <button type="button" className="form-btn" value="" onClick={currentCity}>
        <span role="img" aria-labelledby="pin-it">
          📌
        </span>
      </button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)} °C </li>
          <li>Wind: {weather.wind} km/h</li>
          <li>Humidity: {weather.humidity} %</li>
          <li>
            Description: {weather.description}
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return <div>{form}</div>;
  }
}
