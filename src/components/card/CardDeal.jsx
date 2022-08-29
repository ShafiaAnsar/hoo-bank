import React from 'react'
import './CardDeal.css'
import cardimg  from '../../assets/card.png'
const CardDeal = () => {
  return (
    <div className='cardDeal'>
      <div className="cardDeal-content">
        {/* content */}
        <div className="card-left">
          {/* left */}
          <h1>Find a better card deal <br/> in few easy steps.</h1>
          <p>Arcu tortor, purus in mattis at sed integer faucibus. <br/>Aliquet quis aliquet eget mauris tortor <br/> Aliquet ultrices ac, ametau.</p>
          <div className="card-left_button">
            <button>Get Started</button>
          </div>
        </div>
        <div className="card-right">
          {/*  right*/}
          <img src={cardimg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default CardDeal