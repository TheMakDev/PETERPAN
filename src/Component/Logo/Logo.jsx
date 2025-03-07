import React from 'react'
import { PiBuildingFill } from 'react-icons/pi'
import { logo } from "../../assets"
import "./Logo.css"

const Logo = () => {
  return (
    <div className='logo'>
      <img src={logo} alt="" />
        {/* <div className="icon_container">
            <PiBuildingFill/>
        </div>
        <h1 className='name'>PETER<span>PAN</span></h1> */}
    </div>
  )
}

export default Logo