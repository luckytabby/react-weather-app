import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props) {
    return (
      <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="#4C727A"
        size={18}
        animate={true}
  />);
}