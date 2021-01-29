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
    }

    handleInputInsert = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleCitySubmit = e => {
        e.preventDefault();
        console.log('potwierdzony formylarz');

        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${this.state.value}%2Cuk&lat=0&lon=0&callback=test&id=2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "4db6c1ed6emsh4f030ab748f9166p130092jsna1c47eeee0e4",
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
            }
        })
        .then(response => {
            if(response.ok){
                return response
            }
            throw Error("nie działa lub nie ten spot")
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                err:false
            })
        })
        .catch(err => {
            console.error(err);
            this.state({
                err: true
            })
        });
    }

    render() {
        return (
            <div className='kiteWeatherContainer'>
                <h1> WindGuru Weather Forecast </h1>
                <FormWeatherComponent 
                value={this.state.value} 
                change={this.handleInputInsert} 
                submit={this.handleCitySubmit}
                />
                <ResultWeatherComponent
                error={this.state.err}
                />
            </div>
        )
    };
}



export default KiteAppWeatherForecast;