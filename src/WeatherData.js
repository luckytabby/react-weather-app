import React from "react"
import FormattedDate from "./FormattedDate"

export default function WeatherData(props) {
    return (
        <ul>
            <li><strong>{props.data.city}</strong></li>
            <li><FormattedDate date={props.data.date} /></li>
            <li className="weatherDescription"><strong>Weather:</strong> {props.data.description}</li>
            <li><strong>Temperature:</strong> {props.data.temp}°F</li>
            <li><strong>Wind Speed:</strong> {props.data.wind} mph</li>
            <li><strong>Humidity:</strong> {props.data.humidity}%</li>
        </ul>
    );
}