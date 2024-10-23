import React from "react";
import Weather from "./components/weather/Weather.js"
import RandomUser from "./components/randomuser/RandomUser.js";
import './App.css';

function App(){
  return(
    <div className="app">
      <Weather className="weatherComp"/>
      <RandomUser className="randomUserComp"/>
    </div>
  )
}

export default App;