import React from 'react';
import Button from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footerContainer'>
            <div className='footerLinks'>
                <div className='footerLinksWrapper'>
                    <div className='footerHeadline'>
                        <h2> Find Us</h2>  
                        <Link 
                        to='/'
                        target='_blank'
                        aria-label='Facebook'>
                        <i className='fab fa-facebook-f' />    
                        </Link>
                        <Link 
                        to='/'
                        target='_blank'
                        aria-label='Instagram'>
                        <i className='fab fa-instagram'/>    
                        </Link>
                    </div>
                    <div>
                        <p>
                            Your Kite Spot
                            Kite Street 123
                            00-987 Beach Place
                            Phone 898 88 898
                            e-mail@e-mail.com
                        </p>
                    </div>
                    <div className='footerHeadline'>
                        <h2> Sitemap</h2>
                    </div>
                    <div className='footerLinksItems'>
                        <Link to='/'> Homepage </Link>
                        <Link to='/Spots'> Spots </Link>
                        <Link to='/Instructors'> Instructors </Link>
                        <Link to='/Kiteschools'> Kiteschools </Link>
                        <Link to='/Courses'> Courses </Link>
                        <Link to='/Contact'> Contact </Link>
                    </div>
                </div>
            </div>
            <div>
                <small className='websiteRigth'>KiteSurfApp &copy; 2021</small>
            </div>
        </div>

    );
    }

    export default Footer;