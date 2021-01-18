import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'; 
import {Button} from './Button';



function Navbar() {
    const [clickMenu, setClickMenu] = useState(false);
    const [button, setButtonClick] = useState(true);


    const handleClick = () => setClickMenu(!clickMenu);
    const closeMenuForMobileDevices = () => setClickMenu(false);
    const showHideButton = () => {
      if (window.innerWidth <= 800) {
        setButtonClick(false);
      }
      else 
      {
        setButtonClick(true);
      }
    };

    window.addEventListener('resize',showHideButton);

    return (
        <>
          <div className='navigationBar'>
            <div className='navigationBar-container'>
                <Link to="/" className='navigationBar-logo'>
                  MyKiteApp<i className="fas fa-water"></i>
                 </Link>
                <div className='menu-icon' onClick={handleClick}>
               {/* wywołanie ikonki menu ( fav ikona z zaimplementowanego fontawasome) na klik z zastosowaniem metody hadeklick. zmiana */}
                  <i className= {clickMenu? 'fas fa-times' : 'fas fa-bars'}>Div z osadzonymi ikonkami</i>
                {/* zasotoswanie warunku do stałej "const=clickMenu", dla setState ustawionego na false pojawia się ikona "bars
                 natomiast dla zmienionego przez stanu przez handle click , zmienia sie stan na "true" i pojawa się ikonka "x" (krzyżyk) */}
                </div>
            <ul className={clickMenu ? 'navigation-menu active' : 'navigation-menu'}>Trzeba sprawdzić jak to porawnie działa</ul> 
            {/* Wprowadzo dla stałej "const=ClickMenu" warunek dla pojawian się menu: dla clickMenu
            ze stanem początkowym "fals" , nav-menu jest aktywnej, dla stanu "false" nav-menu nie będzie się pojawiać.  */}
              <li className='navigation-item'>
                <Link to='/' className='navigation-links' 
                onClick={closeMenuForMobileDevices}
                >
                Homepage
                </Link> 
              </li>
              <li className='navigation-item'>
                <Link to='/Spots' 
                className='navigation-links' 
                onClick={closeMenuForMobileDevices}
                >
                Spots
                </Link> 
              </li>
              <li className='navigation-item'>
                <Link to='/Instructors' 
                className='navigation-links' 
                onClick={closeMenuForMobileDevices}
                >
                Instructors
                </Link> 
              </li>
              <li className='navigation-item'>
                <Link to='/Kiteschools' 
                className='navigation-links' 
                onClick={closeMenuForMobileDevices}
                >
                Kiteschools
                </Link> 
              </li>
              <li className='navigation-item'>
                <Link 
                to='/Courses' 
                className='navigation-links' 
                onClick={closeMenuForMobileDevices}
                >
                Courses
                </Link> 
              </li>
              <li className='navigation-item'>
                <Link 
                to='/Contact' 
                className='navigation-links' 
                onClick={closeMenuForMobileDevices}
                >
                Contact
                </Link> 
              </li>
              <li className='navigation-item'>
                <Link to='/' 
                className='navigation-links-mobile' 
                onClick={closeMenuForMobileDevices}
                >
                Sign Up
                </Link> 
              </li>
            <ul>{button && <Button buttonStyle='btn-outline'>SIGN UP</Button>}</ul>
            {/* zmienić && na bardziej zrozumialą formą: if button is true" 
            zmienionnic buttostyle z pomocą zdeklarowanej zmiennej na standardowy Style */}
            </div>
          </div>
        </>
    );
}

export default Navbar;
