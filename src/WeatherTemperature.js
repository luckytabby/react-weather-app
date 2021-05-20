import React, { useState } from "react"
import "./App.css"

export default function WeatherTemperature(props) {

    const [unit, setUnit] = useState("fahrenheit");

        function convertToC(event) {

        event.preventDefault();

        setUnit("celsius");

    }


        function showF(event) {

        event.preventDefault();

        setUnit("fahrenheit");

    }

    if (unit === "fahrenheit") {

        return (
        <span className="WeatherTemperature">
            <span className="temperature"> {Math.round(props.fahrenheit)}</span>
            <span className="unit">°F | </span><a onClick={convertToC}>°C</a>
        </span>
        )

    }

    else {

        let celsius = (props.fahrenheit - 32) * 5/9

        return (

            <span className="WeatherTemperature">
                <span className="temperature"> {Math.round(celsius)}</span>
                <span className="unit">°C | </span><a onClick={showF}>°F</a>
            </span>
        )
    }

}