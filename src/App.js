import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App container">
      <div className="card weather-app-container">
        <div className="card-body">
          <Weather defaultCity="Nashville" />
        </div>
      </div>
      <p className="coded-by">
        <a
          href="https://github.com/jstraye1/react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-Source Code
        </a>{" "}
        by Jen Strayer
      </p>
    </div>
  );
}
