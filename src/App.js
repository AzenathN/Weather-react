import React from "react";

import "./App.css";
import SearchForm from "./SearchForm";
import Heading from "./heading";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Heading />
        <SearchForm defaultCity="Moreno Valley"  />
      </div>
    </div>
  );
}
