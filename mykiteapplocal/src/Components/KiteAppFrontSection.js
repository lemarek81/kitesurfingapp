import React from 'react'
import '../App.css'
import './KiteAppFrontSection.css'

function KiteAppFrontSection() {
    return (
        <div className='kiteAppContainter'>
            {/* <h2> Jump on board. Grab the wind</h2> */}
{/* <label for='pole' className='inputStyle'>Wpisz tekst</label> */}
{/* <label for='kitespotslist' className='inputStyle'>Lista Kitespotów</label> */}
            <select id='kitespotslist' className='inputSelect'>
                <option selected value='selected'>Wybierz z listy</option>  
                <option value='Dabki'>Dąbki</option>
                <option value='Gdynia'>Gdynia</option>
                <option value='Hel'>Hel</option>
                <option value='Jastania'>Jastarnia</option>
                <option value='Jurata'>Jurata</option>
                <option value='Chałupy'>Chałupy</option>
            </select>

            {/* <div className='app-btns'>
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
                </Button> */}
                <div className='selectedKitespotWrapper'>
                    <div className='iframeFrontPage'> tu miejsce na mape </div>
                    <div className='selectedKiteSpotContent'>Tu miejsce na informacje zacigniene</div>
                </div>
        </div>
    )
}

export default KiteAppFrontSection;
