import React from 'react'
import { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';

import "./navbar.css"
import items from "./NavbarItems"

import logoWhite from  '../../Assets/Logo-white.png'



function Navbar() {


  // GET ROUTE NAME
  const location = useLocation();
  const routeName = location.pathname;

  // HANDLE MENU
  const [IsMenuOpened, setIsMenuOpened] = React.useState(false);
  
  const HandleMenuClick = () =>{
    setIsMenuOpened(!IsMenuOpened);
  }
  
  // GET NAVBAR SCROOL
  const [stickyClass, setStickyClass] = useState(false);
  
  useEffect(() => {
    const stickNavbar = () => {
      setStickyClass(window.scrollY > 15)
    };
    window.addEventListener('scroll', stickNavbar);
    return ()=>window.removeEventListener("scroll", stickNavbar)

  }, []);

  return (
    <section className='f'>
      
    <nav className={`navbar flex space-between center-vertical text-white ${stickyClass?"sticky":""}`}>
        <Link to="/"className='logo-container'>
            <img className='navbar-logo' src={logoWhite} alt="Logo" />
        </Link>


        <div className='hide-menu'>
          <div className={IsMenuOpened ?'menu-icon-container active' : 'menu-icon-container' } onClick={HandleMenuClick}>
            <span className="menu-lines"></span>
          </div>
        </div>

        <ul className={IsMenuOpened ?'navbar-list-container active-menu' :  'navbar-list-container' }>
          {items.map((item, index)=>{
            return (
              <li key={index}>
                <Link className={routeName == item.url ? item.className + ' active' : item.className} to={item.url}>{item.title}</Link>
              </li>
            )
          })}

        </ul>

    </nav>
    </section>

  )
}

export default Navbar