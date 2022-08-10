import React, { useState } from "react";
import ForecastDay from "./ForecastDay";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState();

  function handleSubmit(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast card-body future-weather">
        <div className="row justify-content-evenly">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col-sm-2 forcast-col" key={index}>
                  <ForecastDay data={dailyForecast} index={index} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "bb7f974b24025ddf5b2576a2a8e204ca";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    axios.get(apiURL).then(handleSubmit);

    return null;
  }
}
