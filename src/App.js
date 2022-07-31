import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App container">
      <div className="card weather-app-container">
        <div className="card-body">
          <h1>Hi</h1>
          <Weather />
        </div>
      </div>
    </div>
  );
}
