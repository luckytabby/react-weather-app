import React, { useState } from "react";
import axios from "axios";
import Pug from "./BigPug.png";
import './App.css';
import WeatherData from "./WeatherData";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Weather(props) {

    //** Constants are the API key, user-entered city/state, weather/state, and whether or not weather data has loaded. */

    const apiKey = `3fdbb0c1f67069bd33e76ea8a1295d83`;
    const [city, setCity]  = useState(props.defaultCity);
    const[weather, setWeather] = useState({ load: false });

    //** This function will set variables with weather data from our Axios call. */

    function handleResponse(response) {

        setWeather({
        load: true,
        city: response.data.name,
        date: new Date(response.data.dt * 1000),
        temp: Math.round(response.data.main.temp),
        wind: Math.round(response.data.wind.speed),
        humidity: response.data.main.humidity,
        icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
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

    if (weather.load) {

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