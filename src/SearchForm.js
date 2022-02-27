import axios from "axios";
import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function SearchForm(props) {
  let [city, setCity] = useState(props.defaultCity);

  let [weather, setWeather] = useState({ ready: false });

  function displayWeather(response) {
    setWeather({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function search() {
    let apiKey = `688213a526a6897457b5169435e5ee75`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeather);
  }

  //function currentPosition(position) {
  //let latitude = position.coords.latitude;
  //let longitude = position.coords.longitude;
  //let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid={d72a05c8cd750bbf5b0d42daadb7570b}`;

  //axios.get(apiUrl).then(displayWeather);
  //}

  function updateCity(event) {
    setCity(event.target.value);
  }

  //function currentCity(event) {
  //event.preventDefault();
  //navigator.geolocation.getCurrentPosition(currentPosition);
  //}

  if (weather.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="City Search"
                onChange={updateCity}
                autoComplete="off"
              />
            </div>
            <div className="col-3">
              <button type="Submit" className="form-btn">
                {" "}
                Submit{" "}
              </button>
            </div>
          </div>
        </form>
        <WeatherInfo data={weather} />
        <WeatherForecast coordinates={weather.coordinates} />
        <footer>
          <a
            href="http://github.com/AzenathN/Weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>
          <small> coded by</small>{" "}
          <a
            href="http://github.com/AzenathN"
            target="_blank"
            rel="noopener noreferrer"
          >
            Azenath Tovar
          </a>
          <a
            href="https://goofy-bohr-b3c3b5.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            hosted by netlify
          </a>
        </footer>
      </div>
    );
  } else {
    search();
    return "One moment please...";
  }
}
