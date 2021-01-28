import React from 'react'
import Button from './Button'
import './ContactForm.css'

function contactForm() {
    return (
        <>
        <div className='contactFormContainer'>
            <div className='contactFormWrapper'> 
            <div className='pageHeadline'>Contact Us</div>
            <section className='contactForm'>
            
                <p className='contactFormHeading'>
                    Get in touch with best Kite team ever
                </p>
                <p className='contactFormText'>
                    we are waiting all day for your message, 
                    unless there is a grate wind and then we are on surfing :)
                </p>
                <div className='inputFromArea'>
                    <form>
                        <label for="name">You Name:</label>
                            <input type='text' name='name' placeholder='Name' className='inputStyle'/> 
                        <label for="email">Give us your e-mail:</label>
                            <input type='email' name='email' placeholder='E-mail' className='inputStyle'/> 
                        <label for="leaveMessage">Leave a message:</label>
                            <input type='text' name='leaveMessage' placeholder='Write us few lines (max 500 signs)' maxlength='500' className='inputStyle'/> 
                        <Button type='submit' > Send </Button>
                    </form>
                </div>
            </section>
            </div>
        </div>
        </>

    );
    }

    export default contactForm;