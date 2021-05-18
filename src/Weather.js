import React, { useState } from "react";
import axios from "axios";
import Pug from "./BigPug.png";
import './App.css';

export default function Weather() {

    const [city, setCity]  = useState("");
    const[weather, setWeather] = useState("");
    const[load, setLoad] = useState("");

    function handleResponse(response) {
        setWeather({
        temp: Math.round(response.data.main.temp),
        wind: Math.round(response.data.wind.speed),
        humidity: response.data.main.humidity,
        icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        let apiKey = `3fdbb0c1f67069bd33e76ea8a1295d83`;
        let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiURL).then(handleResponse);

        setLoad(true);
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

    if (load === true) {

    return(
        <div className="container">
            <div className="search">
                {form}
            </div>
            <h2>{city}</h2>
            <div className="weatherContainer">
                <img src={Pug} alt="pug">
                </img>
                <ul>
                    <li>Temperature: {weather.temp}°C</li>
                    <li>Wind Speed: {weather.wind} km/hr</li>
                    <li>Humidity: {weather.humidity}%</li>
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