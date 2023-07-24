import React from 'react'
import "./plansSection.css"
import Plans from './plans'
import {FaTrophy} from 'react-icons/fa'

function PlansSection() {
  return (
    <section className='plans container flex center-vertical'>

      <div className='plans-container'>
      {Plans.map((plan, index)=>{
            return (
          
              <div key={index} className={plan.className}>
                <div className="top-seller-card"><FaTrophy aria-label='Troféu'/><p>O mais vendido!</p></div>
                <div className="plan-card-header">

                  <div className='title'>{plan.title}</div>

                  <div className='mega'>
                    <b>
                      {plan.mega} MEGA
                    </b>
                  </div>
                </div>
                <div className="price">
                  <span       className='plan-currency'>R$</span>
                  <b className='plan-price'>{plan.price}</b>
                  <span className='plan-month'>/mês</span>
                </div>

                <div className='plan-feature-container'>
                  <ul className='plan-feature-list'>
                    <li className='plan-feature'>{plan.vantagem1}</li>
                    <li className='plan-feature'>{plan.vantagem2}</li>
                    <li className='plan-feature'>{plan.vantagem3}</li>
                  </ul>
                </div>

                <a className='plan-btn' href="#">Assinar plano</a>
              </div>
        )})}
      </div>

    </section>
  )
}

export default PlansSection