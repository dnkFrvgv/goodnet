import React from 'react'
import "./vantagensSection.css"
import {FaWifi, FaWrench, FaUserShield, FaDownload} from "react-icons/fa"

function VantagensSection() {
  return (
    <section className='vantagens'>
      <h2 className='title'>Porque a GoodNet é a melhor opção para você?</h2>

      <div className='cards-container'>
        <div className="card">
          <div className='icon'>
            <FaWifi/>
          </div>

          <h1>Conexão rápida</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sapiente.</p>
        </div>

        <div className="card">
          <div className='icon'>
            <FaDownload/>
          </div>

          <h1>Alta velocidade</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sapiente.</p>
        </div>

        <div className="card">
          <div className='icon'>
            <FaUserShield/>
          </div>

          <h1>Segurança e privacidade</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sapiente.</p>
        </div>
        <div className="card">
          <div className='icon'>
            <FaWrench/>
          </div>

          <h1>Serviço de qualidade</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sapiente.</p>
        </div>
        

      </div>
    </section>
  )
}

export default VantagensSection