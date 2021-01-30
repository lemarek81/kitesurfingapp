import React from 'react'
import './ContactData.css'

function contactData() {
    return (
        <>
          
        <div className='contactDataContainer'>
            <div className='contactDetailsWrapper'>
            <h1> Our Location</h1>
            <section className='contactDetails'>
                <div className='contactAddress'>
                    <p>
                    Your Kite Spot<br></br>
                    Kite Street 123<br></br>
                    00-9987 Beach Place<br></br>
                    <br></br>
                    <a href='tel:+48 987-654-321' className='phoneStyle'>987-654-321</a><br></br>
                    <a href='mailto:e-mail@mail.com'className='mailStyle'>e-mail@mail.com</a><br></br>
                    </p>
                    <br></br>
                    <p><b>Our Account number</b></p>
                    <p>1234 1234 0000 0000 1234 1234 0000 0000</p>
               </div>
                <div className='contactAddressMap'>
                <iframe title='myMap' src='https://www.openstreetmap.org/export/embed.html?bbox=18.658068180084232%2C54.69705112017024%2C18.66811037063599%2C54.701186436383516&amp;layer=mapnik&amp;marker=54.6991185884943%2C18.66308712946193' className='OpenSoureMapFrameStyle'></iframe><br/><small><a href='https://www.openstreetmap.org/?mlat=54.69912&amp;mlon=18.66309#map=17/54.69912/18.66309'>Wyświetl większą mapę</a></small>
                </div>
            </section>
            </div>
        </div>
        </>

    );
    }

    export default contactData;