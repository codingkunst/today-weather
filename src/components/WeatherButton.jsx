import React from 'react'
import { Button } from 'react-bootstrap'

const WeatherButton = (props) => {

  const onWeahterHandler = () => {
    console.log('현재 위치 날씨');
  }

  return (
    <div>
      <Button variant="outline-light">현재 위치</Button>
      {props.city.map((item, index) => (
        <Button variant="outline-light" key={index} onClick={onWeahterHandler}>{item}</Button>
      ))}
    </div>
  )
}

export default WeatherButton