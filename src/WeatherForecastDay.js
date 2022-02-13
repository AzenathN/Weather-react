import React from "react";
import WeatherIcon from "./icons";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return days[day];
  }

  return (
    <div className="col">
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={26} />
      <div className="Weather-temperatures">
        <span className="WeatherForecast-temp-min">
          {Math.round(props.data.temp.min)} ° |
        </span>
        <span className="WeatherForecast-temp-max">
          <strong> {Math.round(props.data.temp.max)} ° </strong>
        </span>
      </div>
    </div>
  );
}
