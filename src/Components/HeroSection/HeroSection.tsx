import React from 'react'
import './heroSection.css'
import heroimg from "./../../Assets/image.png"
import background from "./../../Assets/background.png";

function HeroSection() {
  return (
    <div style={{ 
      backgroundImage: `url(${background})`,backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>

    <section  className='home container flex center-vertical'>

      <div className='column left
      '>
          <h2 className='s'>Internet 100% fibra óptica</h2>
          <h1 className='main-text'>Procurando Internet de qualidade para sua casa?
            </h1>
            
          {/* <h1 className='main-text'>Nós queremos revolucionar a qualidade da sua Internet</h1> */}
          {/* color:'#ed6709' */}
          {/* <h2 style={{marginTop: '15px', fontSize:'25px'}} className='s'>Ultra</h2> */}
          <h1 style={{fontSize: '95px'}}>200 <span style={{fontSize: '35px'}}>Mb</span></h1>
          {/* <h1 style={{fontSize: '35px', marginTop:'0px'}}>Mb</h1> */}
          {/* <p className='secondary-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, repellendus perspiciatis</p> */}

          <div className='hero-preco'>
            <p className='m1'>R$</p>
            <p className='m'>99</p>
            <p className='m'>,90</p>
            <p className='m2'>/mês</p>
          </div>


            <a className='btn' href="#">
              Contratar agora
            </a>

      </div>

      <div className='column right'>
          
          <img className='hero-img' src={heroimg} alt="" />

        
      </div>

        

    </section>
    </div>

  )
}

export default HeroSection