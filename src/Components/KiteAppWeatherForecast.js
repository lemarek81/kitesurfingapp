import React, { Component } from 'react'
import '../App.css';
import './KiteAppWeatherForecast.css';
import FormWeatherComponent from './FormWeatherComponent'
import ResultWeatherComponent from './ResultWeatherComponent'

class  KiteAppWeatherForecast extends Component {

    state = {
        value:" ",
        date: " ",
        city: " ",
        sunrise:" ",
        sunset: " ",
        temp: " ",
        pressure:" ",
        wind: " ",
        err: " ",
        weather: {}
    }

    handleInputInsert = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleCitySubmit = e => {
        e.preventDefault();
        console.log('potwierdzony formularz');

        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${this.state.value}&units=metric`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "4db6c1ed6emsh4f030ab748f9166p130092jsna1c47eeee0e4",
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                temp:data.main.temp,
                wind:data.wind,
                weather: data.weather
            })
        })
        .catch(err => {
            console.error(err);
            this.setState({
                err: true
            })
        });
    }

    render() {



        return (
            <div className='kiteWeatherContainer'>
                <h1> Weather Forecast </h1>
                <FormWeatherComponent 
                value={this.state.value} 
                change={this.handleInputInsert} 
                submit={this.handleCitySubmit}
                />
                <div className='weatherResults'>
                <ResultWeatherComponent
                temp={this.state.temp}
                weather={this.state.weather}
                wind={this.state.wind}
                error={this.state.err}
                />
                </div>
            </div>
        )
    };
}



export default KiteAppWeatherForecast;