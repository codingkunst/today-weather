import React from 'react'

const Weather = (props) => {
  return (
    <div className='rounded border border-inherit border-solid p-5 m-5 bg-sky-100'>
      <p>{props.weather?.name}</p>
      <p>{props.weather?.main.temp}℃</p>
      <p>{props.weather?.weather[0].description}</p>
    </div>
  )
}

export default Weather