import React from 'react'
import '../App.css'
import './KiteAppFrontSection.css'
import ResultWeatherComponent from './ResultWeatherComponent'
import FormWeatherComponent from './FormWeatherComponent'

function KiteAppFrontSection() {
    return (
        <div className='kiteAppContainter'>
            <FormWeatherComponent  />
        
        <div className='selectedKiteSpotContent'>
            <ResultWeatherComponent />
        </div>
         
        </div>
    )
}

export default KiteAppFrontSection;
