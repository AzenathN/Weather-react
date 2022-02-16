import React from "react";

import "./App.css";
import SearchForm from "./SearchForm";
import Heading from "./heading";
import WeatherForecast from "./WeatherForecast";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Heading />
        <SearchForm />
        <WeatherForecast />
      </div>
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
      </footer>
    </div>
  );
}
