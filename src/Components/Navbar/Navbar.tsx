import React from 'react'
import logo from  '../../Assets/Goodnet_small_logo.png'
import "./navbar.css"
import items from "./NavbarItems"
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

interface props{

}

function Navbar({}: props) {

  const [IsMenuOpened, setIsMenuOpened] = React.useState(false);

  const HandleMenuClick = () =>{
    setIsMenuOpened(!IsMenuOpened);
  }

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
          {/* <img className='navbar-logo' src={logo} alt="Logo" /> */}
          <h1 className='logo-text'>GoodNet</h1>
        </Link>

        <div className='hide-menu'>


        
        <div className={IsMenuOpened ?'menu-icon-container active' : 'menu-icon-container' } onClick={HandleMenuClick}>
          <span className="menu-lines"></span>
        </div>
        </div>
        <ul className={IsMenuOpened ?'navbar-list-container active-menu' :  'navbar-list-container' }>
          {items.map((item, index)=>{
            return (
              <li>
                <Link key={index} className={item.className} to={item.url}>{item.title}</Link>
              </li>
            )
          })}

        </ul>

    </nav>
    </section>

  )
}

export default Navbar