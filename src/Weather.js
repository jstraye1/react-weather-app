import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import Forecast from "./Forecast";
import sun from "./images/01d.png";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function showCurrentConditions(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      icon: { sun },
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      feelsLike: response.data.main.feels_like,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="Search">
          <div className="row justify-content-evenly">
            <div className="col-sm-8 search-bar">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control city-entry"
                  placeholder="enter a city"
                  autoFocus={true}
                  autoComplete="false"
                />
              </div>
            </div>
            <div className="col-sm-4 search-btn-area">
              <button type="submit" className="btn btn-primary search-btn">
                Search
              </button>
              <button className="btn btn-info current-btn">
                Current <i className="fa-solid fa-location-arrow"></i>
              </button>
            </div>
          </div>
        </form>
        <div className="row current-row">
          <div className="col-sm-8">
            <h1 className="current-city">{weatherData.city}</h1>
            <h3 className="current-date">
              <small>Last Updated:</small>
              <br />{" "}
              <em>
                <FormattedDate date={weatherData.date} />
              </em>
            </h3>
            <h2 className="current-temp">
              <span>{Math.round(weatherData.temperature)}</span>
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
              {weatherData.description}
            </p>
          </div>
          <div className="col-sm-4">
            <img
              src={weatherData.icon}
              alt={weatherData.description}
              className="current-weather-icon img-fluid"
            />
          </div>
          <div className="row">
            <div className="col-sm-3 current-conditions">
              Feels Like: {Math.round(weatherData.feelsLike)}°F
            </div>
            <div className="col-sm-3 current-conditions">
              Humidity: {weatherData.humidity}%
            </div>
            <div className="col-sm-3 current-conditions">
              Wind: {Math.round(weatherData.wind)}mph
            </div>
          </div>
        </div>
        <div className="card">
          <Forecast />
        </div>
      </div>
    );
  } else {
    const apiKey = "bb7f974b24025ddf5b2576a2a8e204ca";
    let weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=imperial&appid=${apiKey}`;
    axios.get(weatherApi).then(showCurrentConditions);
    return "Loading...";
  }
}
