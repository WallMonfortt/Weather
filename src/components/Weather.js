import { useState, useEffect } from "react";
import WeatherItem from "./WeatherItems"


const Weather= () => {

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("")

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [icon, setIcon] = useState("");
  const [desc, setDesc] = useState("");
  const [degrees, setDegrees] = useState("");
  const [farhe, setFarhe] = useState("");
  const [grades, setGrades] = useState("")
  const [units, setUnits] = useState("°C")
  const [localTime, setLocalTime] = useState()
  

  const allow = (ubication) => {

    const coords = ubication.coords;
    setLatitude(coords.latitude);
    setLongitude(coords.longitude);
  };

  const deny = (err) => {
    return alert(`Error: ${err.message}. This app requires allow permissions`)
  };

  useEffect(()=>{
    if (latitude & longitude) {
      const logic = async () => {
        const url = `https://api.weatherapi.com/v1/current.json?key=0920a717352a45a78b311947210207&q=${latitude},${longitude}&aqi=no`;
        const weatherData = await fetch(url).then((res)=> res.json());
        console.log(weatherData);
          setCity(weatherData.location.name);
          setCountry(weatherData.location.country);
          setIcon(weatherData.current.condition.icon);
          setDesc(weatherData.current.condition.text);
          setGrades(weatherData.current.temp_c);
          setDegrees(weatherData.current.temp_c);
          setFarhe(weatherData.current.temp_f);
          setLocalTime(weatherData.location.localtime);

      };
      logic();

      
    }
  }, [latitude,longitude])

  const options = {
    enableHighAccuracy: true,
		maximumAge: 0, 
  }

  const change = () => {
    if (units === "°C") {
      setUnits("°F")
      setGrades(farhe)
    }else{
      setUnits("°C")
      setGrades(degrees)
    }
  }

  

  navigator.geolocation.getCurrentPosition(allow,deny, options)

  

  return(
    <div className="box">
      <WeatherItem 
        change={change} 
        city={city} 
        localTime={localTime} 
        country={country} 
        iconUrl={icon} 
        desc={desc} 
        grades={grades} 
        units={units}/>
      
    </div>
  )
  
}

export default Weather