import React ,{useState} from 'react'
import './Navbar.css'
import {close ,logo,menu} from '../../assets'
function Navbar() {
  const [toggle, setToggle] = useState(false)
  return (
    <div className='navbar'>
      <div className="navbar_logo">
        <img src={logo} alt="HooBank" />
      </div>
      <div className="navbar_list">
        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>Product</li>
          <li>Clients</li>
        </ul>
      </div>
      <div className="navbar_menu">   
      {toggle ? <img src={close} className="navbar_menu-close" onClick ={() =>setToggle(false)}/> : <img src={menu}  onClick={()=> setToggle(true)}/>} 
      {toggle && <div className="navbar_menu-links">
      <ul>
          <li>Home</li>
          <li>Features</li>
          <li>Product</li>
          <li>Clients</li>
        </ul>
      </div>
       }
      </div>
    </div>
  )
}

export default Navbar
