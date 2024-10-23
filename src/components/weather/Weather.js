import React, { useState } from "react";
import { fetchWeatherData } from "./fetchingApi";
import './weather.css';
import { FaBars, FaMapMarkerAlt, FaSearch, FaCloud, FaSun, FaSnowflake, FaCloudRain } from 'react-icons/fa';

const Weather = () => {
  const [city, setCity] = useState('');
  const [citySaved, setCitySaved] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  
  const handleFetchWeather = async (e) => {
    e.preventDefault();

    if(city.trim() === ""){
      setError("Please enter a city.");
      return;
    } 
    
    try{
      const data = await fetchWeatherData(city);
      setWeather(data);
      setError(null);
    } catch (err){
      setError("City not found. Please try again");
      setWeather(null);
    }

    setCitySaved(city);

  };

  return(
    <div className="container">
      <div className="topBar">
          <FaBars /> {citySaved && !error ? citySaved  : "Search for your city"} <FaMapMarkerAlt />
      </div>
      
      <div className="searchBar">
        <form onSubmit={handleFetchWeather}>
          <input
            type="text"
            placeholder="Enter city"
            value = {city}
            onChange={(e) => setCity(e.target.value)} 
          />
          <button type="submit">Get Weather</button>
        </form>
      </div>

      {error && <p stle={{ color:'red'}}>{error}</p>}

      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}

    </div>
  );
};

export default Weather;