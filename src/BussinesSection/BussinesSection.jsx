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
            You do the business, we’ll handle the money.
            </h2>
            <p>With the right credit card, you can improve your financial life by<br/> building credit, earning rewards and saving money.<br/> But with hundreds of credit cards on the market.</p>
        </div>
        <div className="bsection_content-right">
            <div className="rewards">
                <div className="rewards_icon">
                <StarsIcon/>
                </div>
                <div className="reward_text">
                <h5>Rewards</h5>   
                <p>We take proactive steps make sure your information<br/> and transactions are secure.</p>
                </div>
                <div className="rewards">
                <div className="rewards_icon">
                <OfflinePinIcon/>
                </div>
                <div className="reward_text">
                <h5>100% Secured</h5>   
                <p>We take proactive steps make sure your information <br/>and transactions are secure.</p>
            </div>
            </div>
            </div>
            <div className="rewards">
                <div className="rewards_icon">
                <SendIcon/>
                </div>
                <div className="reward_text">
                <h5>100% Secured</h5>   
                <p>We take proactive steps make sure your information <br/>and transactions are secure.</p>
            </div>
            </div>
          </div>
          </div>
     
    </div>
  )
}

export default BussinesSection