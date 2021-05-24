import React, { useState } from "react";
import axios from "axios";
import Pug from "./BigPug.png";
import './App.css';
import WeatherData from "./WeatherData";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {

    //** Constants are the API key, user-entered city/state, weather/state, and whether or not weather data has loaded. */

    const apiKey = `3fdbb0c1f67069bd33e76ea8a1295d83`;
    const [city, setCity]  = useState(props.defaultCity);
    const[weather, setWeather] = useState({ loaded: false });

    //** This function will set variables with weather data from our Axios call. */

    function handleResponse(response) {

        setWeather({
        loaded: true,
        city: response.data.name,
        coord: response.data.coord,
        date: new Date(response.data.dt * 1000),
        temp: Math.round(response.data.main.temp),
        wind: Math.round(response.data.wind.speed),
        humidity: response.data.main.humidity,
        icon: response.data.weather[0].icon,
        description: response.data.weather[0].description,
        });

    }

    function handleSubmit(event) {
        event.preventDefault();

        search();
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

    function search() {
        const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
        axios.get(apiURL).then(handleResponse);
    }

    if (weather.loaded) {

    return(
        <div className="container">
            <div className="search">
                {form}
            </div>
            <div className="weatherContainer">
                <img src={Pug} alt={weather.description}>
                </img>
                <WeatherData data={weather} />
            </div>
            <WeatherForecast coord={weather.coord} />
         </div>
    );

    }

    else {

        search();

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