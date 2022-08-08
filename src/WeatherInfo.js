import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row current-row">
        <div className="col-sm-8">
          <h1 className="current-city">{props.data.city}</h1>
          <h3 className="current-date">
            <small>Last Updated:</small>
            <br />{" "}
            <em>
              <FormattedDate date={props.data.date} />
            </em>
          </h3>
          <h2 className="current-temp">
            <span>{Math.round(props.data.temperature)}</span>
            <span className="temp-unit">
              <a href="/" className="unit active">
                °F
              </a>{" "}
              |
              <a href="/" className="unit">
                °C
              </a>
            </span>
          </h2>
          <p className="current-weather-description">
            {props.data.description}
          </p>
        </div>
        <div className="col-sm-4">
          <img
            src={props.data.icon}
            alt={props.data.description}
            className="current-weather-icon img-fluid"
          />
        </div>
        <div className="row">
          <div className="col-sm-3 current-conditions">
            Feels Like: {Math.round(props.data.feelsLike)}°F
          </div>
          <div className="col-sm-3 current-conditions">
            Humidity: {props.data.humidity}%
          </div>
          <div className="col-sm-3 current-conditions">
            Wind: {Math.round(props.data.wind)}mph
          </div>
        </div>
      </div>
    </div>
  );
}
