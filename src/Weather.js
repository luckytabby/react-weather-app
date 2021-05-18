import React, { useState } from "react";
import axios from "axios";
import Pug from "./BigPug.png";
import './App.css';
import FormattedDate from "./FormattedDate";

export default function Weather() {

    //** Constants are the API key, user-entered city/state, weather/state, and whether or not weather data has loaded */

    const apiKey = `3fdbb0c1f67069bd33e76ea8a1295d83`;

    const [city, setCity]  = useState("");
    const[weather, setWeather] = useState({ load: false });

    function handleResponse(response) {

        console.log(response.data);

        setWeather({
        load: true,
        city: response.data.name,
        temp: Math.round(response.data.main.temp),
        wind: Math.round(response.data.wind.speed),
        humidity: response.data.main.humidity,
        icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        description: response.data.weather[0].description,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
        axios.get(apiURL).then(handleResponse);
    }

    function updateCity(event) {
        setCity(event.target.value);
    }

    let form = (
        <form onSubmit={handleSubmit}>
            <input id="userLocation" 
            type="search" 
            placeholder="Enter a city"
            onChange={updateCity}></input>
            <input id="button" type="submit"></input>
        </form>
    );

    if (weather.load) {

    return(
        <div className="container">
            <div className="search">
                {form}
            </div>
            <h2>{weather.city}</h2>
            <div className="weatherContainer">
                <img src={Pug} alt={weather.description}>
                </img>
                <ul>
                    <li className="weatherDescription"><strong>Weather:</strong> {weather.description}</li>
                    <li><strong>Temperature:</strong> {weather.temp}°F</li>
                    <li><strong>Wind Speed:</strong> {weather.wind} mph</li>
                    <li><strong>Humidity:</strong> {weather.humidity}%</li>
                </ul>
            </div>
         </div>
    );

    }

    else {
        return(
            <div className="container">
                <div className="search">
                    {form}
                </div>
                <div className="weatherContainer">
                    <img src={Pug} alt="pug">
                    </img>
                    <ul>
                    </ul>
                </div>
            </div>
        );
    }
}