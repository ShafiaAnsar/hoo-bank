import React from 'react'
import './Testimonials.css'
import Img1 from '../../assets/icon.svg'
import person01 from '../../assets/people01.png'
import person02 from '../../assets/people02.png'
import person03 from '../../assets/people03.png'
const Testimonials = () => {
  return (
    <div className='testimonials'>
        <div className="testimonials_text">
        <h2>What people are <br/>saying about us</h2>
        <p>Everything you need to accept card payments <br/>and grow your business anywhere on the planet.</p>
        </div>
        <div className="testimonials_containers">
            <div className="testimonials_container">
                <img src={Img1} alt="" />
                <p>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
                <div className="container_person">
                <img src={person01} alt="" />
                <div className="container_person-text">
                <h5>Herman Jensen</h5>
                <p>Founder & Leader</p>
                </div>
                </div>
               
            </div>
            <div className="testimonials_container">
                <img src={Img1} alt="" />
                <p>It is usually people in the money business, finance, and international trade that are really rich.</p>
                <div className="container_person">
                <img src={person02} alt="" />
                <div className="container_person-text">
                <h5>Kenn Gallagher</h5>
                <p>Founder & Leader</p>
                </div>
                
                </div>
               
            </div><div className="testimonials_container">
                <img src={Img1} alt="" />
                <p>Money makes your life easier. If you're lucky to have it, you're lucky.</p>
                <div className="container_person">
                <img src={person03} alt="" />
                <div className="container_person-text">
                <h5>Steve Mark</h5>
                <p>Founder & Leader</p>
                </div>
                
                </div>
               
            </div>
     
        </div>
      
    </div>
  )
}

export default Testimonials
