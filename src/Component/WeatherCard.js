import React from 'react'
import { useState } from "react";
import 'weather-react-icons/lib/css/weather-icons.css';
import { WeatherIcon } from 'weather-react-icons';

const api={
    key: "2c8f723bca7112773b1d2f79333e78c9",
    base: "https://api.openweathermap.org/data/2.5/",
};


function WeatherCard() {
    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState({});

    const searchPressed = () => {
        fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
            setWeather(result);
            console.log(result);
        })
    }
    
  return (
    <div>
        <h1>Weather</h1>

        <div>
            <input 
            type="text"
            placeholder="Enter City"
            onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={searchPressed}>Search</button>
        </div>
        {typeof weather.main != "undefined" ? (
        <div className="card col-6 p-5 mx-auto">  
            <div className="d-flex flex-column">
                    <h4 className="mx-auto">{weather.name}, {weather.sys.country}</h4>
                    <p className="mx-auto mb-5">{weather.weather[0].main}</p>
                    <div className="d-flex justify-content-around">
                        <p>{weather.main.temp}°C</p>
                        <p>Humidity</p>
                        <WeatherIcon name="owm" iconId={weather.weather[0].id}/>
                    </div>
            </div>
        </div>  
        ) : (
            ""
        )}
        
    </div>
  )
}

export default WeatherCard