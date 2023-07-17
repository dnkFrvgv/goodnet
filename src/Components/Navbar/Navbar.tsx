import React from 'react'
import logo from  '../../Assets/Logo.png'
import "./Navbar.css"
import items from "./NavbarItems"
import { FaBars,FaTimes } from "react-icons/fa";

interface props{

}

function Navbar({}: props) {

  const [IsMenuOpened, setIsMenuOpened] = React.useState(false);

  const HandleMenuClick = () =>{
    setIsMenuOpened(!IsMenuOpened);
  }

  return (
    <nav className='navbar flex space-between center-horizontal text-white'>
        <a href="#">
          <img className='navbar-logo' src={logo} alt="Logo" />
        </a>

        <div className='menu-icon-container' onClick={HandleMenuClick}>
        {IsMenuOpened ? 
          <FaTimes className='menu-icon-t'/>
          :
          <FaBars className='menu-icon'/>
        }
        </div>


        <ul className={IsMenuOpened ?'navbar-list-container active-menu' :  'navbar-list-container' }>
          {items.map((item, index)=>{
            return (
              <li>
                <a key={index} className='navbar-items' href={item.url}>{item.title}</a>
              </li>
            )
          })}

        </ul>

    </nav>
  )
}

export default Navbar