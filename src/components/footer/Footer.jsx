import React from 'react'
import './Footer.css'
import social1 from '../../assets/instagram.svg'
import social2 from '../../assets/linkedin.svg'
import social3 from '../../assets/twitter.svg'
import social4 from '../../assets/facebook.svg'
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_content">
            <div className="footer-logo">
                <div className="logo">
                <img src={logo} alt="logo" />
                </div>
                <div className="logo_text">
                    <p>A new way to make the payments <br/> easy, reliable and secure.</p>
                </div>
            </div>
            <div className="footer_content">
                <div className="content_text">
                    <h5>Usefull Links</h5>
                    <p>Content</p>
                    <p>How it Works</p>
                    <p>Explore</p>
                    <p>Create</p>
                    <p>Terms & Services</p>
                </div>

            </div>
            <div className="footer_content">
                <div className="content_text">
                    <h5>Community</h5>
                    <p>Help Center</p>
                    <p>Partners</p>
                    <p>Suggestions</p>
                    <p>Blog</p>
                    <p>Newsletters</p>
                </div>

            </div>    <div className="footer_content">
                <div className="content_text">
                    <h5>Partner</h5>
                    <p>Become a Partner</p>
                    <p>Our Partner</p>
                </div>

            </div>
        </div>
        <div className="footer_socials-copyright">
            <div className="copyright">
                <p>Copyright© 2021 HooBank. All Rights Reserved.</p>
            </div>
            <div className="social_contact">
                <img src={social1} alt="instagram" />
                <img src={social2} alt="linkedin" />
                <img src={social3} alt="twitter" />
                <img src={social4} alt="facebook" />
               </div>
            </div>
    </div>
  )
}

export default Footer
