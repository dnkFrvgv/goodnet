import React from 'react'
import logo from  '../../Assets/Goodnet_small_logo.png'
import "./navbar.css"
import items from "./NavbarItems"

interface props{

}

function Navbar({}: props) {

  const [IsMenuOpened, setIsMenuOpened] = React.useState(false);

  const HandleMenuClick = () =>{
    setIsMenuOpened(!IsMenuOpened);
  }

  return (
    <nav className='navbar flex space-between center-horizontal text-white'>
        <a href="#" className='logo-container'>
          <img className='navbar-logo' src={logo} alt="Logo" />
          <h1 className='logo-text'>GoodNet</h1>
        </a>

        <div className='hide-menu'>

        <div className={IsMenuOpened ?'menu-icon-container active' : 'menu-icon-container' } onClick={HandleMenuClick}>
          <span className="menu-lines"></span>
        </div>
        </div>


        <ul className={IsMenuOpened ?'navbar-list-container active-menu' :  'navbar-list-container' }>
          {items.map((item, index)=>{
            return (
              <li>
                <a key={index} className={item.className} href={item.url}>{item.title}</a>
              </li>
            )
          })}

        </ul>

    </nav>
  )
}

export default Navbar