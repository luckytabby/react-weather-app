import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast(props) {

    const[forecast, setForecast] = useState({ loaded: false });

    function handleResponse(response) {

        console.log(response.data);

        setForecast({
        loaded: true,
        minTemp: 15,
        maxTemp: 15,
        });

    }

    let lat = props.coord.lat;
    let lon = props.coord.lon;

    const apiKey = `3fdbb0c1f67069bd33e76ea8a1295d83`;

    function search() {

    const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&unit=imperial`;

    axios.get(apiURL).then(handleResponse);

    };

    if (forecast.loaded) {

        return (
            <div className="forecast">

                <div className="col">
                    <p className="forecastDay">{forecast[0].dt}</p>
                    <WeatherIcon code={forecast[0].weather[0].icon} />
                    <p>
                        <span className="forecastTempMin">{forecast[0].temp.max}</span>
                        / <span className="forecastTempMax">{forecast[0].temp.min}</span>
                    </p>
                </div>

            </div>
        ) 

    }

    else {

        search();

        return (
            <div className="forecast">

                <div className="col">
                    <p className="forecastDay">Monday</p>
                    <WeatherIcon code="10d" />
                    <p>
                        <span className="forecastTempMin">10</span>
                        / <span className="forecastTempMax">20</span>
                    </p>
                </div>

            </div>
        )

    }

}