import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import { useEffect } from "react/cjs/react.development";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {

    setLoaded(false);

  }, [props.coordinates]);

    function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
        <div>
            {forecast.map(function(dailyForecast, index) {
                if (index  > 0 && index < 6) {
                return(
                    <div key={index}>
                         <WeatherForecastDay data={dailyForecast} />
                    </div>
                ) } else {
                    return null;
                }
            })};
        </div>
    );
  } else {

    let apiKey = "3fdbb0c1f67069bd33e76ea8a1295d83";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}