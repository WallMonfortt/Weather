import { useState, useEffect } from "react";
import WeatherItem from "./WeatherItems"

const Weather= () => {

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("")
  const [mess, setMess] = useState("");

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [icon, setIcon] = useState("");
  const [desc, setDesc] = useState("");
  const [degrees, setDegrees] = useState("");
  const [farhe, setFarhe] = useState("");
  

  const allow = (ubication) => {

    const coords = ubication.coords;
    setLatitude(coords.latitude);
    setLongitude(coords.longitude);
    return (latitude, longitude)
  };

  const deny = (err) => {
    return setMess(`Error: ${err.message}`)
  };

  useEffect(()=>{
    if (latitude && longitude !==0) {
      const logic = async () => {
        const url = `http://api.weatherapi.com/v1/current.json?key=0920a717352a45a78b311947210207&q=${latitude},${longitude}&aqi=no`;
        const weatherData = await fetch(url).then((res)=> res.json());
        setCity(weatherData.location.name);
        setCountry(weatherData.location.country);
        setIcon(weatherData.current.condition.icon);
        setDesc(weatherData.current.condition.text);
        setDegrees(weatherData.current.temp_c);
        setFarhe(weatherData.current.temp_f);

        console.log(weatherData);
        console.log(city);
      };
      logic();

      
    }
  }, [latitude,longitude])

  const options = {
    enableHighAccuracy: true, // Alta precisión
		maximumAge: 0, // No queremos caché
		// timeout: 15000
  }

  

  navigator.geolocation.getCurrentPosition(allow,deny, options)

  

  return(
    <div>
      <div>
        <WeatherItem city={city} country={country} iconUrl={icon} desc={desc} deg={degrees} farhe={farhe}/>
      </div>

      <div><h2>{mess}</h2></div>
      
    </div>
  )
  
}

export default Weather