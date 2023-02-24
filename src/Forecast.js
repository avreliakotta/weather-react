import React, { useState } from "react";
import "./Forecast.css";
import ReactAnimatedWeather from 'react-animated-weather';
export default function Forecast(responsive) {
   function handleSabmit(event) {
      
   }
     return (
        <div className="Forecast">
           <h3>Forecast</h3>
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