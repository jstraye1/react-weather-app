import React from "react";

export default function FormattedDate(props) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[props.date.getMonth()];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let date = props.date.getDate();
  let hours = props.date.getHours();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  let minutes = props.date.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return (
    <div>
      {day}, {month} {date} - {hours}:{minutes} {ampm}
    </div>
  );
}
