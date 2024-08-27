import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherInfo from './components/WeatherInfo';
import WeatherButton from './components/WeatherButton';

function App() {
  const apiUrl = import.meta.env.VITE_SERVER_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  let citys = ['seoul', 'chuncheon'];

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
    let url = `${apiUrl}lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=en`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    console.log('data: ', data);
    setWeather(data);
    setLoading(false);
  }

  // 도시 날씨
  const getCityWeather = async () => {
    let url = `${apiUrl}q=${city}&appid=${apiKey}&units=metric&lang=en`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    console.log('data: ', data);
    setWeather(data);
    setLoading(false);
  }

  useEffect(() => {
    if (city === '') {
      getCurrentLocation();
    } else {
      getCityWeather();
    }
  }, [city])

  return (
    <div>
      {loading ? (
        <div className='container'>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className='container'>
          <WeatherInfo weather={weather} />
          <WeatherButton citys={citys} setCity={setCity} />
        </div>
      )}
    </div>
  )
}

export default App
