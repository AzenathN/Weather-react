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
    </div>
  );
}
