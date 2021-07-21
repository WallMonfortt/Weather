import React from 'react'


const NewWeather = ({city, localTime, country, desc, grades, units, iconUrl }) => {

  return (
    <div className="otherWeather">
      <h2>{city}</h2>
      <h3>{country}</h3>
      <p>{localTime}</p>
      <img src={iconUrl} alt="icon" width={50} height={50} />
      <p>{desc}</p>
      <p>{grades} {units}</p>
    </div>
  )
}

export default NewWeather
