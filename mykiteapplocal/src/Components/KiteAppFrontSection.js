import React from 'react'
import "../App.css"
import { Button } from './Button'
import './KiteAppFrontSection.css'

function KiteAppFrontSection() {
    return (
        <div className='kiteApp-containter'>
            <h1> Adventruer Awaites</h1>
            <h1>Kocham Cię Antosiu</h1> 
            <div className='app-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large' 
                >
                    ANTOSIA, JUSTYNA, POLA, MILENA
                </Button>
            </div>
            <div className='app-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large' 
                >
                    KLARA<i className='far fa-play-circle'/>
                </Button>
            </div>
        </div>
    )
}

export default KiteAppFrontSection;
