import './App.css';
import Weather from './Weather';
import WeatherForecast from "./WeatherForecast";

function App() {
  return (
    <div id="appContainer" className="container">
        <h1>Pug Weather</h1>
        <Weather defaultCity="Leavenworth" />
        <WeatherForecast defaultCity="Leavenworth" />
        <p className="signature">
            This project is <a href="https://github.com/maggiegmcd/react-weather-app" target="_blank" rel="noreferrer">open-sourced</a> and 
            coded with ♥︎ by <a href="https://www.linkedin.com/in/maggiegmcd/" target="_blank" rel="noreferrer">Maggie McDonald</a>.
        </p>
    </div>
  );

}

export default App;
