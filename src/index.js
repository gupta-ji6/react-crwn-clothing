import React from "react";
import ReactDOM from "react-dom";

import HomePage from "./homepage.component";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
