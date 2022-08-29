import React from 'react'
import './BussinesSection.css'
import StarsIcon from '@mui/icons-material/Stars';
import OfflinePinIcon from '@mui/icons-material/OfflinePin';
import SendIcon from '@mui/icons-material/Send';
const BussinesSection = () => {
  return (
    <div className='bsection'>
        <div className="bsection_content">
        <div className="bsection_content-left">
            <h2>
            You do the business, <br/>we’ll handle the money.
            </h2>
            <p>With the right credit card, you can improve your financial life by<br/> building credit, earning rewards and saving money.<br/> But with hundreds of credit cards on the market.</p>
            <div className="left-button">
              <button>Get Started</button>
            </div>
        </div>
        <div className="bsection_content-right">
          <div className="rewards">
            <div className="rewards_heading">
                <StarsIcon className='rewards_icon'/>
                <h5>Rewards</h5>  
            </div>
            <div className="reward_text">
             <p>The best credit cards offer some tantalizing<br/> combinations of promotions and prizes</p>
             </div>
          </div>
          <div className="rewards">
            <div className="rewards_heading">
                <OfflinePinIcon className='rewards_icon'/>
                <h5>100% Secured</h5>   
            </div>
            <div className="reward_text">
            <p>We take proactive steps make sure your<br/> information are secure.</p>
             </div>
          </div><div className="rewards">
            <div className="rewards_heading">
                <SendIcon className='rewards_icon' id='transfer'/>
                <h5>Balance Transfer</h5> 
            </div>
            <div className="reward_text" >
            <p>A balance transfer credit card can save you <br/> a lot of money in interest charges.</p>
             </div>
          </div>
            
      </div>
        </div>
     
    </div>
  )
}

export default BussinesSection