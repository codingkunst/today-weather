import React from 'react'
import { Button } from 'react-bootstrap'

const WeatherButton = (props) => {
  return (
    <div>
      <Button variant="outline-light">현재 위치</Button>
      {props.citys.map((item, index) => (
        <Button variant="outline-light" key={index} onClick={() => { props.setCity(item) }}>{item}</Button>
      ))}
    </div>
  )
}

export default WeatherButton