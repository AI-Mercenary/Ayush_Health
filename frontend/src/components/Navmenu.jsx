import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/header/ResponsiveNavBar.css';
const Navmenu = () => {
 // eslint-disable-next-line react-hooks/rules-of-hooks
 const [isOpen, setIsOpen] = useState(false);

 const toggleMenu = () => {
   setIsOpen(!isOpen);
 };

  return (
    <div>
        <nav className="navbar">
            {/* <div className="logo">MyApp</div> */}
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li>
                <NavLink to="/" exact activeClassName="active" onClick={() => setIsOpen(false)}>
                    Home
                </NavLink>
                </li>
                <li>
                <NavLink to="/registration" activeClassName="active" onClick={() => setIsOpen(false)}>
                    About
                </NavLink>
                </li>
                <li>
                <NavLink to="/login" activeClassName="active" onClick={() => setIsOpen(false)}>
                    Scheme
                </NavLink>
                </li>
                <li>
                <NavLink to="/contactus" activeClassName="active" onClick={() => setIsOpen(false)}>
                    Contact Us
                </NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navmenu
