import axios from 'axios';
import React, { useRef, useState } from 'react';
import './weather.css';

function Weather() {
  const [weather, setWeather] = useState(null);
  const inp = useRef();

  const fetchData = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=466ddaa21a8de191e9f608bd11a56acb`
      );
      setWeather(response.data);
    } catch (error) {
      alert("City not found!");
      console.error("Fetch error:", error);
    }
  };

  const handleInput = () => {
    const city = inp.current.value;
    if (city) fetchData(city);
  };

  return (
    <div className="weather-container">
  <h1 className="weather-title">Real-Time Weather App</h1>
  <div className="weather-input">
    <input type="text" ref={inp} placeholder="Enter city name" />
    <button onClick={handleInput}>Get Weather</button>
  </div>

  {weather && weather.main && (
    <div className="weather-card">
      <h2>{weather.name}, {weather.sys?.country}</h2>
      <p><strong>Temperature:</strong> {weather.main.temp}°C</p>
      <p><strong>Feels Like:</strong> {weather.main.feels_like}°C</p>
      <p><strong>Humidity:</strong> {weather.main.humidity}%</p>
      <p><strong>Pressure:</strong> {weather.main.pressure} hPa</p>
      <p><strong>Min Temp:</strong> {weather.main.temp_min}°C</p>
      <p><strong>Max Temp:</strong> {weather.main.temp_max}°C</p>
      <p><strong>Sea Level:</strong> {weather.main.sea_level || 'N/A'}</p>
      <p><strong>Ground Level:</strong> {weather.main.grnd_level || 'N/A'}</p>
    </div>
  )}
</div>

  );
}

export default Weather;
