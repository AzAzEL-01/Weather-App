import React from 'react'
import "./Forecast.css"

const Forecast = () => {
  return (
    <div className='forecast'>
        <h2 className="forecast-header">5-day Forecast</h2>
        <div className="forecast-days">
            <div className="forecast-day">
                <p>Monday</p>
                <p>Cloudy</p>
                <p>12°F</p>
            </div>
            <div className="forecast-day">
                <p>Tuesday</p>
                <p>Cloudy</p>
                <p>12°F</p>
            </div>
        </div>

      
    </div>
  )
}

export default Forecast
