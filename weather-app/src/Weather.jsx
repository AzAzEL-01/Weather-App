import React, {useState, useEffect} from 'react'
import "./Weather.css"
import WeatherDetails from './Components/WeatherDetails/WeatherDetails'
import Forecast from './Components/Forecast/Forecast'



const Weather = () => {
  const APIKEY = "07047c265867a9b370dbd342914e7be0";
  url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}&units=metric`
  




   
   return (
    <div>

    <div className='container'>
        <h3 className='title'>Weather App</h3>
       <input type="text"  className='user-input' />
        <button className='btn' >Get Weather</button>
       

        

        <WeatherDetails/>
        <Forecast/>

       





      </div>

      
      
    </div>
  )
}

export default Weather
