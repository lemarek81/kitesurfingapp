import React from 'react'
import Button from './Button'

function contactForm() {
    return (
        <div className='footerContainer'>
            <section className='footerSubscription'>
                <p className='footerSubscriptionHeading'>
                    Get in touch with best Kite team ever
                </p>
                <p className='footerSubscriptionText'>
                    we are waiting all day for your message, 
                    unless there is a grate wind and then we are on surfing :)
                </p>
                <div className='inputFromArea'>
                    <form>
                        <label for="name">First name:</label>
                            <input type='text' name='name' placeholder='Your Name' className='inputStyle'/> 
                        <label for="email">First name:</label>
                            <input type='email' name='email' placeholder='Your E-mail' className='inputStyle'/> 
                        <label for="leaveMessage">First name:</label>
                            <input type='text' name='leaveMessage' placeholder='Leave us a message' className='inputStyle'/> 
                        <Button style='btnOutline'> Send </Button>
                    </form>
                </div>
            </section>
        </div>

    );
    }

    export default contactForm;