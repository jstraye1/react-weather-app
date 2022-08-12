import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function search() {
    const apiKey = "bb7f974b24025ddf5b2576a2a8e204ca";
    let weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
    axios.get(weatherApi).then(showCurrentConditions).catch(error);
  }

  function error() {
    alert(
      "We're sorry. We do not have a forecast for this city. Please search again for a different city."
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
    event.target.reset();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function showCurrentConditions(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      feelsLike: response.data.main.feels_like,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="Search" onSubmit={handleSubmit}>
          <div className="row justify-content-evenly">
            <div className="col-sm-8 search-bar">
              <div className="mb-3">
                <input
                  type="text"
                  onChange={handleCityChange}
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
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <div className="card">
          <Forecast coordinates={weatherData.coordinates} />
        </div>
      </div>
    );
  } else {
    const apiKey = "bb7f974b24025ddf5b2576a2a8e204ca";
    let weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
    axios.get(weatherApi).then(showCurrentConditions);
    return "Loading...";
  }
}
