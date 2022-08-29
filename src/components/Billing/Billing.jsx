import React from 'react'
import './Billing.css'
import img1 from '../../assets/bill.png'
import img2 from '../../assets/apple.svg'
import img3 from '../../assets/google.svg'
const Billing = () => {
  return (
    <div className='billing'>
      <div className="billing-content">
        {/* content */}
        <div className="billing-left">
          {/* left */}
          <img src={img1} alt='bill'/>
        </div>
        <div className="billing-rigt">
          {/* rigt */}
          <div className="billing-rigt_text">
          <h2>Easily control your <br/> billing & invoicing.</h2>
          <p>Elit enim sed massa etiam. Mauris eu adipiscing ultrices <br/>aenean neque. Fusce ipsum orci rhoncus aliporttitor <br/>integer platea placerat.</p>
          </div>
          <div className="billing-rigt_icon">
            <img src={img2} alt="apple" />
            <img src={img3} alt="" />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Billing
