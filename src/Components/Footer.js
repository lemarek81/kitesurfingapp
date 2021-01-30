import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footerContainer'>
            <div className='footerLinks'>
                    <div className='footerLinksWrapper'>
                        <div className='footerHeadline'>
                            <h1> Find Us</h1>  
                            <div className='socialMediaContainer'>
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
                        </div>
                        <div className='footerAddress'>
                            <p>
                                Your Kite Spot <br></br>
                                Kite Street 123 <br></br>
                                00-987 Beach Place <br></br>
                                <a href='tel:+48 987-654-321' className='phoneStyle'> PHONE: 987-654-321</a><br></br>
                                <a href ='mailto:e-mail@e-mail.com' className='mailStyle'>e-mail@email.com</a> <br></br>
                                
                            </p>
                        </div>
                        <div className='footerHeadline'>
                            <h1> Sitemap</h1>
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
                    <div>
                    <small className='websiteRigths' >KiteSurfApp &copy; 2021</small>
                    </div>
            </div>
        </div>

    );
    }

    export default Footer;