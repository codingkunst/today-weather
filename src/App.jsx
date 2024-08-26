import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './components/Weather';
import WeatherButton from './components/WeatherButton';

function App() {
  const apiUrl = import.meta.env.VITE_SERVER_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  const [weather, setWeather] = useState(null);

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
    let url = `${apiUrl}lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log('data: ', data);
    setWeather(data);
  }

  useEffect(() => {
    getCurrentLocation();
  }, [])

  return (
    <div>
      <div className='container'>
        <Weather weather={weather} />
        <WeatherButton />
      </div>
    </div>
  )
}

export default App
