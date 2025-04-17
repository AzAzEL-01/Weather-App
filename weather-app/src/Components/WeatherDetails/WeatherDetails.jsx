import React from 'react'
import "./WeatherDetails.css"

const WeatherDetails = () => {
  return (
    <div>
        <div className='header'>
        <h1 className="city">Kathmandu</h1>
        <p className="temperature">60F°</p>
        <p className="condition">Cloudy</p>
        </div>
         <div className="weather-details">
          <div className='Humidity'>
            <p>Humidity</p>
            <p>60%</p>
          </div>
          <div className='windspeed'>
            <p>Wind Speed</p>
            <p>5 mph</p>
            </div>
        </div>
      
    </div>
  )
}

export default WeatherDetails
