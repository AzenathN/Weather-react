import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1> {props.data.city} </h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />, {props.data.description}
            </li>

            <li>
              Humidity:<strong> {props.data.humidity}%</strong>, Wind:
              <strong> {Math.round(props.data.wind)} km/h</strong>
            </li>
          </ul>
        </div>

        <div className="col-6">
          <div className="temperature-container d-flex justify-content-end">
            <WeatherIcon code={props.data.icon} size={10*10} />
            <div>
              <span className="temperature">
                <WeatherTemperature
                  celsius={Math.round(props.data.temperature)}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
