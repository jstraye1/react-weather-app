import React from "react";

export default function Temperature(props) {
  return (
    <h2 className="Temperature current-temp">
      <span>{Math.round(props.fahrenheit)}</span>
      <span className="temp-unit">
        <span className="unit active">°F</span>{" "}
      </span>
    </h2>
  );
}
