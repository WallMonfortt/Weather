

const WeatherItems = ({city, country, iconUrl, desc, grades, units}) => { 

  return(
    <div>
      <h2>{city}</h2>
      <h3>{country}</h3>
      <img src={iconUrl} alt="icon" width={50} height={50} />
      <p>{desc}</p>
      <p><span>{grades}</span> <span>{units}</span></p>
    </div>
  )
}

export default WeatherItems