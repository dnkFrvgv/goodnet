import React from 'react'
import './heroSection.css'
import heroimg from "./../../Assets/image.png"

function HeroSection() {
  return (
    <section className='home container flex center-vertical'>

      <div className='column left
      '>
          <h1 className='main-text'>Procurando Internet de qualidade para sua casa?</h1>
          <p className='secondary-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, repellendus perspiciatis</p>

          <div className='hero-preco'>
            <p>R$</p>
            <p>79</p>
            <p>,90</p>
            <p>/mês</p>
          </div>


            <a className='btn' href="#">
              Contratar agora
            </a>

      </div>

      <div className='column right'>
          
          <img className='hero-img' src={heroimg} alt="" />

        
      </div>

        

    </section>
  )
}

export default HeroSection