import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {

    function maxTemp() {

        let temperature = Math.round(props.data.temp.max);

        return `${temperature}`

    }

    function minTemp() {

        let temperature = Math.round(props.data.temp.min);

        return `${temperature}`

    }

    function day() {

        let date = new Date(props.data.dt * 1000)

        let day = date.getDay();

        let days = [
            "Sun",
            "Mon",
            "Tues",
            "Weds",
            "Thurs",
            "Fri",
            "Sat",
        ]

        return days[day];

    }

    return (
        <div className="WeatherForecast">
            <div className="row">  
            <div className="col">
                <p>{day()}</p>
                <WeatherIcon code={props.data.weather[0].icon} />
                <p>{minTemp()}° / {maxTemp()}°</p>
            </div>
            </div>
      </div>
    )

}