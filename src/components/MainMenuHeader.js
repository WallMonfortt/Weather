import React from 'react'
import '../styles/Main-Header.css'
import WM2 from '../img/WM2.png'
import WMonf from '../img/WMonf.png'
import SearchBox from './SearchBox'
import NewWeather from './NewWeather';
import { useState } from "react";

const MainMenuHeader = () => {

  const [city, setCity] = useState("");
  const [icon, setIcon] = useState("");
  const [country, setCountry] = useState("");
  const [desc, setDesc] = useState("");
  const [degrees, setDegrees] = useState("");
  const units = "°C"
  const [localTime, setLocalTime] = useState()


  const handleSearch = (query) => {
    const getWeather = async() => {
      const url = `https://api.weatherapi.com/v1/current.json?key=0920a717352a45a78b311947210207&q=${query}&aqi=no`;
      const weather = await fetch(url).then((res)=> res.json());
          setCity(weather.location.name);
          setCountry(weather.location.country);
          setIcon(weather.current.condition.icon);
          setDesc(weather.current.condition.text);
          setDegrees(weather.current.temp_c);
          setLocalTime(weather.location.localtime);
    }
    getWeather();
  }

  return (
    <div className="Main-Header">
      <div className="logos">
        <img height="60px" alt="logo"  src={WM2} />
        <div ><img height="60px" alt="logo" src={WMonf} /></div>
      </div>
      <div className="search">
        <SearchBox onSearch={handleSearch} />
      </div>
      <>
      {city && <NewWeather
        city={city}
        localTime={localTime} 
        iconUrl={icon} 
        country={country} 
        desc={desc} 
        grades={degrees} 
        units={units}/>}
      </>
    </div>
  )
}

export default MainMenuHeader
