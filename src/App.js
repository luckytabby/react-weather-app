import './App.css';
import Weather from './Weather'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  return (
    <div id="appContainer" className="container">
        <h1>Pug Weather</h1>
        <Weather />
        <p className="signature">
            <FontAwesomeIcon icon="fas fa-paw" />
            This project is <a href="https://github.com/maggiegmcd/react-weather-app">open-sourced</a> and 
            coded by <a href="https://www.linkedin.com/in/maggiegmcd/">Maggie McDonald</a>.
        </p>
    </div>
  );

}

export default App;
