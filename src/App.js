import './App.css';
import Search from './components/search/search';
import Currentweather from './components/current-weather/current-weather';
import {useState} from 'react';
import { weather_API_KEY,weather_API_URL } from './api';
import Forecast from './components/forecast/forecast';
function App() {
  const [currentweather,setcurrentweather]=useState(null);
  const [forecast,setforecast]=useState(null);
  const handleonSearchChange=(searchData)=>{
    const [lat,lon]=searchData.value.split(" ");
   const Currentweatherfetch=fetch(`${weather_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${weather_API_KEY}&units=metric`)
   const forecastfetch=fetch(`${weather_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${weather_API_KEY}&units=metric`)
   Promise.all([Currentweatherfetch,forecastfetch])
   .then(async(response)=>{
    const weatherResponse=await response[0].json();
    const forecastResponse=await response[1].json();
    setcurrentweather({city:searchData.label, ...weatherResponse});
    setforecast({city:searchData.label, ...forecastResponse})
   })
   .catch((err)=>console.log(err));
  }
  console.log(currentweather);
  console.log(forecast)
  return (
    <div className="container">
      <Search onSearchChange={handleonSearchChange}/>
      {currentweather && <Currentweather data={currentweather}/>}
      {forecast && <Forecast data={forecast}/>}
    </div>
  );
}

export default App;
