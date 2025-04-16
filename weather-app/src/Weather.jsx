import React, {useState} from 'react'
import "./Weather.css"


const Weather = () => {

    const [input, setInput] = useState("")
    const [weather, setWeather] = useState([])

    const userInput =()=> {

    }

    const getWeather =() => {

    }

  return (
    <div>

    <div className='container'>
        <h3 className='title'>Weather App</h3>
        <div className='input-form'>
        <input type="text" onChange={userInput} className='user-input' />
        <button className='btn' onClick={getWeather}>Get Weather</button>

        </div>
       

    </div>
      
    </div>
  )
}

export default Weather
