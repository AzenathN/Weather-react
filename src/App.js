import React, { useState } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

export default function App() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
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
  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="City search" onchange={updateCity} />
      <button type="submit">Submit</button>
    </form>
  );

  if (loaded) {
    return (
      <h2>
        <div>
          {form}
          <ul>
            <li>Temperature: {Math.round(weather.temperature)}°C </li>
            <li>Wind: {weather.wind} km/h </li>
            <li>Humidity: {weather.humidity}%</li>
            <li>Description: {weather.description}</li>
            <li>
              <img src={weather.icon} alt={weather.description} />
            </li>
          </ul>
        </div>
      </h2>

);
  } else {
    return form;
  }
}
