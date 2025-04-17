import React , {useState, useEffect}from 'react'
import "./Forecast.css"

const Forecast = (props) => {

  const [forecast, setForecast] = useState([]);
  const APIKEY = "07047c265867a9b370dbd342914e7be0";

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${APIKEY}&units=imperial`;

    const fetchForecastData = async(cityName) =>{
      try{
        const forecastResponse = await fetch(url);
        const forecastData = await forecastResponse.json()

        const dailyForecast = forecastData.list.filter((item,index) => index%8 ===0)
          setForecast(dailyForecast)
        

        
        
  
  
      }
       
      catch(error){
        console.log(error)
      }

    }

 
    
  useEffect(()=>{

    if (props.city.trim()!==""){
      fetchForecastData(props.city)

    }
    


  
    


  },[props.city])

  






  return (
    <>
     <div className='forecast'>
     {forecast.length>0 && (
      <h2 className="forecast-header"></h2>
     )

     }

        <div className="forecast-days">
          {forecast.map((day,index)=>(
             <div key={index} className="forecast-day">
              
            <p>{new Date(day.dt*1000).toLocaleDateString("en-US",{weekday:"short"})}</p>
            <p>
              <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt ={day.weather[0].description}
                />
            </p>
            <p>{Math.round((day.main.temp -32)/1.8)}°C</p>
             </div>

          )
          
        
  )

          }
            
            
        </div>

      
    </div>
    </>

   
     

 
    
  )
}

export default Forecast
