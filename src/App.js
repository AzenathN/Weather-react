import React from "react";
import "./App.css";
import SearchForm from "./SearchForm";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchForm defaultCity="Moreno Valley" />
      </div>
    </div>
  );
}
