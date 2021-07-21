

const WeatherItems = ({city, localTime, country, iconUrl, desc, grades, units, change}) => { 

  return(
    <div className="box-container">
      <h2>{city}</h2>
      <h3>{country}</h3>
      <p>{localTime}</p>
      <img src={iconUrl} alt="icon" width={50} height={50} />
      <p>{desc}</p>
      <p><span>{grades}</span> <span>{units}</span></p>
      <button onClick={change}>°C / °F </button>
    </div>
  )
}

export default WeatherItems