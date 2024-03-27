import React from 'react';

interface WeatherDisplayProps {
    weatherData: {
        main: {
            temp: number;
        };
        weather: {
            main: string;
            description: string;
            icon: string;
        }[];
    };
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weatherData }) => {
    const { main, weather } = weatherData;

    console.log('Weather Data:', weatherData);

    if (!main || !weather) {
        return <div>No weather data available</div>;
    }

    return (
        <div>
            <div>Temperature: {main.temp} K</div>
            <div>Weather: {weather[0].main}</div>
            <div>Description: {weather[0].description}</div>
            <img
                src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`}
                alt="Weather Icon"
            />
        </div>
    );
};

export default WeatherDisplay;
