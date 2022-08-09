import React from "react";
import oneD from "./images/01d.png";
import oneN from "./images/01n.png";
import twoD from "./images/02d.png";
import twoN from "./images/02n.png";
import threeD from "./images/03d.png";
import threeN from "./images/03n.png";
import fourD from "./images/04d.png";
import fourN from "./images/04n.png";
import nineD from "./images/09d.png";
import nineN from "./images/09n.png";
import tenD from "./images/10d.png";
import tenN from "./images/10n.png";
import elevenD from "./images/11d.png";
import elevenN from "./images/11n.png";
import thirteenD from "./images/13d.png";
import thirteenN from "./images/13n.png";
import fiftyD from "./images/50d.png";
import fiftyN from "./images/50n.png";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": oneD,
    "01n": oneN,
    "02d": twoD,
    "02n": twoN,
    "03d": threeD,
    "03n": threeN,
    "04d": fourD,
    "04n": fourN,
    "09d": nineD,
    "09n": nineN,
    "10d": tenD,
    "10n": tenN,
    "11d": elevenD,
    "11n": elevenN,
    "13d": thirteenD,
    "13n": thirteenN,
    "50d": fiftyD,
    "50n": fiftyN,
  };
  return (
    <div>
      <img
        src={codeMapping[props.code]}
        alt={props.alt}
        className="current-weather-icon img-fluid"
      />
    </div>
  );
}
