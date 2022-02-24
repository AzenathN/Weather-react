import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature} ° `;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature} °`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="col">
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={38} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temp-max">{maxTemperature()} ° |</span>
        <span className="WeatherForecast-temp-max">
          <strong> {minTemperature()} </strong>
        </span>
      </div>
    </div>
  );
}
