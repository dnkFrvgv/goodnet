import React, { useEffect, useRef, useState } from 'react'
import './heroSection.css'
import heroimg from "./../../Assets/image.png"
import background from "./../../Assets/background.png";


function HeroSection() {

  const [height, setHeight] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if(ref.current){
      setHeight(ref.current.clientHeight)
    }
  }, [])

  return (
    <div style={{ 
      position: 'relative',
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>

      <section  className='home container flex center-vertical'>

        <div className='column left'>
          <h2 className='s'>Internet 100% fibra óptica</h2>
          <h1 className='main-text'>Procurando Internet de qualidade para sua casa?</h1>
            

          <div className='a'>
            <h1>200</h1>

            <div className='b'>   
              <span style={{fontSize: '45px'}}>MEGA</span>
              <span style={{fontSize: '30px', fontWeight: '300'}}>Download</span>
            </div>

          </div>

          <div className="n">

            <div className='hero-preco'>
              <p className='m1'>R$</p>
              <p className='m'>99,90</p>
              <p className='m2'>/mês</p>
            </div>
        
            <div className="hero-btn-container">

              <a className='hero-btn' href="#">
                Contratar agora
              </a>
            </div>

          </div>

        </div>

        <div className='column right'>
            <img className='hero-img' src={heroimg} alt="" />
        </div>

      </section>
      
      <div ref={ref} style={{bottom: -height/2}} className='banner' >
        <h1 style={{fontWeight:'300'}}>Não fique desconectado, garanta já sua Internet!</h1>
      </div>
    </div>

  )
}
// 
export default HeroSection