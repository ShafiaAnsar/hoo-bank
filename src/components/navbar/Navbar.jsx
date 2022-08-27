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
  {/* <div className=" navbar_sm navbar_hidden nav-flex">
    <img src={toggle? close :menu} alt="menu" 
    onClick={()=>setToggle((prev)=>!prev)}
    />
    <div className={`${toggle ?  "nav-flex" : "navbar_hidden"}`} id="menu" ></div>
  </div> */}
    </div>
  )
}

export default Navbar
