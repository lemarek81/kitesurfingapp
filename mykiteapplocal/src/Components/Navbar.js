import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    const [clickMenu, setClickMenu] = useState(false);

    const handleClick = () => setClickMenu(!clickMenu);

    return (
        <>
          <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo'>
                  Tu Będzielogo strony kitesurf Logo <i className="fab fa-typo3"></i>
                 </Link>
                <div className='menu-icon' onClick={handleClick}> 
               {/* wywołanie ikonki menu ( fav ikona z zaimplementowanego fontawasome) na klik z zastosowaniem metody hadeklick. zmiana */}
                  <i className= {clickMenu? 'fas fa-times' : 'fas fa-bars'}>Div z osadzonymi ikonkami</i>
                {/* zasotoswanie warunku do stałej "const=clickMenu", dla setState ustawionego na false pojawia się ikona "bars
                 natomiast dla zmienionego przez stanu przez handle click , zmienia sie stan na "true" i pojawa się ikonka "x" (krzyżyk) */}
                </div>
            <ul className={clickMenu ? 'nav-menu active' : 'nav-menu'}>Trzeba sprawdzić jak to porawnie działa</ul> 
            {/* Wprowadzo dla stałej "const=ClickMenu" warunek dla pojawian się menu: dla clickMenu 
            ze stanem początkowym "fals" , nav-menu jest aktywnej, dla stanu "false" nav-menu nie będzie się pojawiać.  */}
            <ul>dupa1</ul>
            <ul>dupa2</ul>
            </div>
          </nav>
        </>
    );
}

export default Navbar;
