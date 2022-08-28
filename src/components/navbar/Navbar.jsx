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
  <div className="navbar_hidden nav-flex">
    <img src={toggle
          ? <close color="#fff" size={27} onClick={() => setToggle(false)} />
          : <menu color="#fff" size={27} onClick={() => setToggle(true)} />}
    />
    <div className={`${toggle ?  "nav-flex" : "navbar_hidden"}`} id="menu" >
    <ul>
          <li>Home</li>
          <li>Features</li>
          <li>Product</li>
          <li>Clients</li>
        </ul>
    </div>
  </div>
    </div>
  )
}

export default Navbar
