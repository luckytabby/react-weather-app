import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherData(props) {
    return (
        <ul>
            <li><strong>{props.data.city}</strong></li>
            <li><FormattedDate date={props.data.date} /></li>
            <li className="weatherDescription">
            <WeatherIcon code={props.data.icon} alt={props.data.description}/>
            <span>  </span>{props.data.description}</li>
            <li><strong>Temperature:</strong> 
            <WeatherTemperature fahrenheit={props.data.temp}/></li>
            <li><strong>Wind Speed:</strong> {props.data.wind} mph</li>
            <li><strong>Humidity:</strong> {props.data.humidity}%</li>
        </ul>
    );
}