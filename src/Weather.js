import React from "react";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    alert(`The weather in New York is ${response.data.main.temp}°`);
  }
  let apiKey = "fab526fa46488b80d2e756d709629e24";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
  return <h2>Hello from Weather</h2>;
}
