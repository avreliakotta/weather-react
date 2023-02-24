import React,{useState} from "react";
import axios from 'axios';
import './Weather.css';


export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState({});
    let [found, setFound] = useState(false);
    let [message, setMessage] = useState("");
  function showWeather(response) {
    setFound(true);
    setWeather({
        
        description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
       temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed
    });
    }
    
  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=efdbd947cde14818749492ef638a7d6f&units=metric`;
    axios.get(url).then(showWeather);
      setMessage(`Thursday 14:42`);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  let weatherForm = (
    <form className="SearchEngine" onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city" onChange={updateCity} />
          <input type="submit" value="Search" />
          <input type="submit" value="Current"/>
    </form>
  );
  if (found) {
    return (
    < div>
    
        {weatherForm}
        <ul className="Detail">
        <li><h1> {city}</h1></li> 
        <li>{message}</li>  
        <li> {weather.description}</li>
        </ul>
    
        <ul  className="Container">
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
          <li><h1 className="Temperature">{Math.round(weather.temperature)}</h1><p className="Degree">°C</p></li>
        </ul>
        <ul className="Parameters">
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {Math.round(weather.wind)} km/h</li>
        </ul>
    
        </div>
    
    );
  } else {
    return <div>{weatherForm}</div>;
  }
}
