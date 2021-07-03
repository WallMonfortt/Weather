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
        setCity(weatherData.location.name);
        setCountry(weatherData.location.country);
        setIcon(weatherData.current.condition.icon);
        setDesc(weatherData.current.condition.text);
        setDegrees(weatherData.current.temp_c);
        setFarhe(weatherData.current.temp_f);

        console.log(weatherData);
        // console.log(city);
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
      <WeatherItem city={city} country={country} iconUrl={icon} desc={desc} deg={degrees} farhe={farhe}/>
    </div>
  )
  
}

export default Weather