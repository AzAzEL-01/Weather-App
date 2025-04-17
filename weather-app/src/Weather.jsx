import React, {useState, useEffect} from 'react'
import "./Weather.css"
import WeatherDetails from './Components/WeatherDetails/WeatherDetails'
import Forecast from './Components/Forecast/Forecast'




const Weather = () => {
  const APIKEY = "07047c265867a9b370dbd342914e7be0";
  
  
  const [value, setValue] = useState("");
  const[weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("kathmandu");

  useEffect(()=>{
    const fetchData = async(cityName) =>{
      try{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}&units=metric`;
            const response = await fetch(url);
            const data = await response.json();
            setWeatherData(data);
            console.log(data)

      }
      
      catch(error){
        console.log(error);

      };
    };

    fetchData(city)

    
  },[city])



   
   return (
    <div>

    <div className='container'>
        <h3 className='title'>Weather App</h3>
       <input type="text"  className='user-input' />
        <button className='btn' >Get Weather</button>
       

        

        <WeatherDetails weatherData={weatherData}/>
        <Forecast />

       





      </div>

      
      
    </div>
  )
}

export default Weather
