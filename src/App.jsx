import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;

  // 현재 위치
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      console.log(`위도: ${latitude}, 경도: ${longitude}`);
      getCurrentWeather(latitude, longitude);
    });
  }

  // 현재 날씨
  const getCurrentWeather = async (latitude, longitude) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log('data: ', data);
  }

  useEffect(() => {
    getCurrentLocation();
  }, [])

  return (
    <div>
    </div>
  )
}

export default App
