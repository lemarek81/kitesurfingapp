import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'; 



function Navbar() {
    const [clickMenu, setClickMenu] = useState(false);


    const handleClick = () => setClickMenu(!clickMenu);
    const closeMenuForMobileDevices = () => setClickMenu(false);
   
    const showMenu = () => {
      if (window.innerWidth <=960) {
        setClickMenu(false);
      }
      else {
        setClickMenu(true);
      }
    };


    window.addEventListener ('resize', showMenu);
    
    return (
        <>
          <div className='navigationBar'>
            <div className='navigationBar-container'>
                <Link to="/" className='navigationBar-logo' onClick={closeMenuForMobileDevices}>
                  MyKiteApp<i className="fas fa-water"></i>
                 </Link>
                <div className='menu-icon' onClick={handleClick}>
                  <i className= {clickMenu? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            <ul className={clickMenu ? 'navigation-menu active' : 'navigation-menu'}>
              <li className='navigation-item'>
                <Link to='/' className='navigation-links' >
                Homepage
                </Link> 
              </li>
              <li className='navigation-item'>
                <Link to='/Spots' 
                className='navigation-links' >
                Spots
                </Link> 
              </li>
              <li className='navigation-item'>
                <Link to='/Instructors' 
                className='navigation-links'>
                Instructors
                </Link> 
              </li>
              <li className='navigation-item'>
                <Link to='/Kiteschools' 
                className='navigation-links' >
                Kiteschools
                </Link> 
              </li>
              <li className='navigation-item'>
                <Link 
                to='/Courses' 
                className='navigation-links'>
                Courses
                </Link> 
              </li>
              <li className='navigation-item'>
                <Link 
                to='/Contact' 
                className='navigation-links' >
                Contact
                </Link> 
              </li>
              </ul> 
            </div>
          </div>
        </>
    );
}

export default Navbar;
