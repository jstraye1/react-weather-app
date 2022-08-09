import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showCelsius(event) {
    setUnit("celsius");
    event.preventDefault();
  }

  function showFahrenheit(event) {
    setUnit("fahrenheit");
    event.preventDefault();
  }

  if (unit === "fahrenheit") {
    return (
      <h2 className="Temperature current-temp">
        <span>{Math.round(props.fahrenheit)}</span>
        <span className="temp-unit">
          <span className="unit active">°F</span> |{" "}
          <a href="/" className="unit" onClick={showCelsius}>
            °C
          </a>
        </span>
      </h2>
    );
  } else {
    let celsiusTemperature = ((props.fahrenheit - 32) * 5) / 9;
    return (
      <h2 className="Temperature current-temp">
        <span>{Math.round(celsiusTemperature)}</span>
        <span className="temp-unit">
          <a href="/" className="unit" onClick={showFahrenheit}>
            °F
          </a>{" "}
          | <span className="unit active">°C</span>
        </span>
      </h2>
    );
  }
}
