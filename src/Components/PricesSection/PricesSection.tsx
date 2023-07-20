import React from 'react'
import "./pricesSection.css"
import Prices from './prices'

function PlansSection() {
  return (
    <section className='plans container flex center-vertical'>

      <div className='plans-title-container'>
        <h1 className='plans-title'>Lorem ipsum dolor sit.</h1>
      </div>

      <div className='plans'>
          
        <div className='plan-card'>
          <div className="plan-card-header">
            <div className='title'>SUPER</div>

            <div className='mega'>
              <b>
                100 Mega
              </b>
            </div>
          </div>
          <div className="price">
            <b><sup>R$</sup>59.90</b>
            <span>/mês</span>
          </div>

          <div className='plan-feature-container'>
            <ul className='plan-feature-list'>
              <li className='plan-feature'>feature 1</li>
              <li className='plan-feature'>feature 1</li>
              <li className='plan-feature'>feature 1</li>
            </ul>
          </div>

          <a href="#">Assinar plano</a>
        </div>
      </div>

    </section>
  )
}

export default PlansSection