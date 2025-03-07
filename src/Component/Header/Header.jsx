import React from 'react'
import "./Header.css"
import { Link } from 'react-scroll'
import { hero_image } from "../../assets"
import Achievement from '../Achievement/Achievement'

const Header = () => {
  return (
    <header id='header'>
      <div className="container full_height"> 
          <div className="row">
            <div className="column">
              <h1 className="title">
              Innovating Ideas, {""} 
                <span className='g-text'>Powering the Future</span>
              </h1>
              <p className="text_muted description">
              We are committed to transforming ideas into cutting-edge digital solutions. With years of expertise and a team of skilled developers, we specialize in delivering high-quality tech services tailored to meet the unique needs of every client.
              </p>
              <div className="buttons_container">
                <Link to='services' smooth={true} className='btn'>Our Service</Link>
                <Link to='contact' smooth={true} className='btn btn_primary'>Contact Us</Link>
              </div>
            </div>
            <div className="column">
              <div className="image_container">
                <img src={hero_image} alt="" />
              </div>
            </div>
          </div>
          <Achievement />
      </div>
    </header>
  )
}

export default Header