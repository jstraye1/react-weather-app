import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }
  if (props.index === 0) {
    return (
      <div className="today">
        <WeatherIcon
          code={props.data.weather[0].icon}
          alt={props.data.weather[0].description}
        />
        <p className="future-temp">
          <span className="future-high-temp"> {maxTemp()}°F</span>
          <span className="future-low-temp">/{minTemp()}°F</span>
          <br />
          <span className="weekday">Today</span>
        </p>
      </div>
    );
  } else if (props.index === 1) {
    return (
      <div>
        <WeatherIcon
          code={props.data.weather[0].icon}
          alt={props.data.weather[0].description}
        />
        <p className="future-temp">
          <span className="future-high-temp"> {maxTemp()}°F</span>
          <span className="future-low-temp">/{minTemp()}°F</span>
          <br />
          <span className="weekday">Tomorrow</span>
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <WeatherIcon
          code={props.data.weather[0].icon}
          alt={props.data.weather[0].description}
        />
        <p className="future-temp">
          <span className="future-high-temp"> {maxTemp()}°F</span>
          <span className="future-low-temp">/{minTemp()}°F</span>
          <br />
          <span className="weekday">{day()}</span>
        </p>
      </div>
    );
  }
}
