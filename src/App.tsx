import React, { useState } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { WeatherDisplay } from './components/WeatherDisplay';

const API_KEY = 'e68544cf6714121e10e2a47b8ee289da';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<any>(null);

  const searchWeather = async () => {
    try {
      const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      console.log('Response from OpenWeatherMap API:', response.data);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const debouncedSearchWeather = debounce(searchWeather, 500);

  return (
      <div>
        <Input value={city} onChange={setCity} />
        <Button onClick={debouncedSearchWeather}>Search</Button>
        {weatherData && <WeatherDisplay weatherData={weatherData} />}
      </div>
  );
};

export { App };
