import React from 'react';

const ResultWeatherComponent = props => {
    return (
        <div>
            Temperatura: {props.temp ? props.temp: 'brak danych'}<br/>
            Pogoda: {props.weather && props.weather.length > 0 ? props.weather[0].description: 'brak danych'}<br/>
            Wiatr: {props.wind ? props.wind.speed: 'brak danych'}
            {props.error}
        </div>
    );
};

export default ResultWeatherComponent;
