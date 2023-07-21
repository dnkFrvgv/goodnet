import React from 'react'
import "./plansSection.css"
import Plans from './plans'

function PlansSection() {
  return (
    <section className='plans container flex center-vertical'>

      <div className='plans-title-container'>
        <h1 className='plans-title'>Escolha seu plano</h1>
      </div>


      <div className='plans-container'>
      {Plans.map((plan, index)=>{
            return (
          
              <div className={plan.className}>
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
                    <li className='plan-feature'>feature 1</li>
                    <li className='plan-feature'>feature 1</li>
                    <li className='plan-feature'>feature 1</li>
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