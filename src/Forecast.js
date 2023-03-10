import React from "react";
import "./Forecast.css";
import ReactAnimatedWeather from 'react-animated-weather';
export default function Forecast(responsive) {
   
     return (
        <div className="Forecast">
           
           <ul className="Forecast-list">
              <li>
                 <p>Mon</p>
                 <ReactAnimatedWeather
    icon="SNOW"
    color="blue"
    size={40}
    animate={true}
           /></li>
           
              <li>
                 <p>Tue</p>
                 <ReactAnimatedWeather
    icon="RAIN"
    color="blue"
    size={40}
    animate={true}
              /></li>
              <li>
                 <p>Wed</p>
                 <ReactAnimatedWeather
    icon="FOG"
    color="blue"
    size={40}
    animate={true}
                 /></li>
              <li>
                 <p>Thur</p>
                 <ReactAnimatedWeather
    icon="CLEAR_DAY"
    color="blue"
    size={40}
    animate={true}
  />
              </li>
              <li>
                 <p>Fri</p>
                 <ReactAnimatedWeather
    icon="CLEAR_DAY"
    color="blue"
    size={40}
    animate={true}
  />
              </li>
              
        </ul>
           
     </div>
    );
}