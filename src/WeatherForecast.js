import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
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