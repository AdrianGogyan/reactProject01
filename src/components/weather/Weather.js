import React, { useState } from "react";
import { fetchWeatherData } from "./fetchingApi";
import './weather.css';
import { FaBars, FaMapMarkerAlt, FaSearch, FaCloud, FaSun, FaSnowflake, FaCloudRain } from 'react-icons/fa';

const Weather = () => {
  const [city, setCity] = useState('');
  const [citySaved, setCitySaved] = useState(null);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [smallErrorText, setSmallErrorText] = useState('');

  
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
      setSmallErrorText("City not found");
      setWeather(null);
      setCitySaved('');
    }

    setCitySaved(city);

  };

  function SearchIconFunc(){
    setCitySaved(null);
  }

  return(
    <div className="container">
      <div className="topBar">
          <FaBars /> 
          {citySaved && !error ? (
  <p>{citySaved.toUpperCase()}</p>
) : (
  smallErrorText ? (
    <p>{smallErrorText}</p>
  ) : (
    <p>Search</p>
  )
)}

              
          <FaSearch onClick={SearchIconFunc}/>
      </div>
      
      {citySaved ? '' : 
      <div className="searchBar">
        <form onSubmit={handleFetchWeather}>
          <input
            type="text"
            placeholder="Enter city"
            value = {city}
            onChange={(e) => setCity(e.target.value)} 
          />
          <button type="submit"> <FaSearch /></button>
        </form>
      </div>}

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