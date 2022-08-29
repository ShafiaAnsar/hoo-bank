import React from 'react'
import './Hero.css'
import {discount, robot } from '../../assets'

const Hero = () => {
  return (
    <section> 
    <div className="home">
      <div className='home_content'>
      <div className='home_right'>
      <div className="home_discount">
        <div className="home_discount-icon">
        <img src={discount} alt="" />
        </div>
      <h6>20% DISCOUNT FOR 1 MONTH ACCOUNT</h6>
      </div>
      <div className="home_text">
      <h1>  The Next <br/> Generation <br/> Payment Method.</h1>
      <p>
      Our team of experts uses a methodology to <br/>identify the credit cards most likely to fit your needs. <br/>
      We examine annual percentage rates, annual fees.
      </p>
      </div>

    </div>
    <div className="home_left">
      <div className="home_robot">
        <img src={robot} alt="" />
      </div>

    </div>
      </div>
    
    </div>
    
    </section>
  )
}

export default Hero