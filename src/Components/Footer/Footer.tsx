import React from 'react'
import "./footer.css"
import {FaFacebook, FaYoutube, FaInstagram, FaLink} from "react-icons/fa"

function Footer() {
  return (
    <footer className='footer'>
      <ul className='footer-social-medias'>
        <li className='footer-list-item'><a href="#"><FaFacebook aria-label='Facebook'/></a></li>
        <li className='footer-list-item'><a href="#"><FaYoutube aria-label='Youtube'/></a></li>
        <li className='footer-list-item'><a href="#"><FaInstagram aria-label='Instagram'/></a></li>
        <li className='footer-list-item'><a href="https://perficio.com.br/goodnet/central"><FaLink aria-label='Perficio/GoodNet'/></a></li>
      </ul>
      <h3>Travessa Lauro de Freitas, 45 - 1º Andar/Sala 03, Centro, Juazeiro - BA, 48903-465</h3>
      <p>&copy;2020 - <a href="#">GoodNet</a> - Todos os direitos reservados.</p>

    </footer>
  )
}

export default Footer