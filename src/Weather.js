import React from "react";
import Forecast from "./Forecast";
import sun from "./images/01d.png";
import "./Weather.css";

export default function Weather() {
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
          <h1 className="current-city">Nashville</h1>
          <h3 className="current-date">
            <small>Last Updated:</small>
            <br /> <em>Sunday, July 10 - 4:48PM</em>
          </h3>
          <h2 className="current-temp">
            <span>99</span>
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
          <p className="current-weather-description">Sunny</p>
        </div>
        <div className="col-sm-4">
          <img src={sun} alt="sun" className="current-weather-icon img-fluid" />
        </div>
        <div className="row">
          <div className="col-sm-3 current-conditions">Feels Like: 109°F</div>
          <div className="col-sm-3 current-conditions">Humidity: 55%</div>
          <div className="col-sm-3 current-conditions">Wind: 5mph</div>
        </div>
      </div>
      <div className="card">
        <Forecast />
      </div>
    </div>
  );
}
