import React from 'react'
import CardItem from './CardItem';
import './Card.css';


function Card() {
    return (
        <div className='cards'>
            <h1> strutu tutu check epic destination</h1>
            <div className='cardsContainer'>
                <div className='cardsWrapper'>
                    <ul className='cardsItems'>
                        <CardItem
                            src='images/image.jpg'
                            text= 'tu wpisz teak karty'
                            label='tujest label'
                            path='/sevices'
                        >
                        </CardItem>
                        <CardItem
                            src='images/image.jpg'
                            text= 'tu wpisz teak karty'
                            label='tujest label nr 2 dupadupa'
                            path='/sevices'
                        >
                        </CardItem>
                    </ul>
                    <ul className='cardsItems'>
                        <CardItem
                            src='images/image.jpg'
                            text= 'tu wpisz teak karty'
                            label='tujest label'
                            path='/sevices'
                        >
                        </CardItem>
                        <CardItem
                            src='images/image.jpg'
                            text= 'tu wpisz teak karty'
                            label='tujest label nr 2 dupadupa'
                            path='/sevices'
                        >
                        </CardItem>
                        <CardItem
                            src='images/image.jpg'
                            text= 'tu wpisz teak karty'
                            label='tujest label nr 2 dupadupa'
                            path='/sevices'
                        >
                        </CardItem>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card
