

const WeatherItems = ({city, country, iconUrl, desc, deg, farhe}) => {

  return(
    <div>
      <h2>{city}</h2>
      <h3>{country}</h3>
      <img src={iconUrl} alt="icon" width={50} height={50} />
      <p>{desc}</p>

      <span>{deg}</span>
    </div>
  )
}

export default WeatherItems