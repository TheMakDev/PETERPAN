import React from 'react'
import "./Product.css"
import { Link } from 'react-scroll'
import { hero_image, product } from "../../assets"


const Product = () => {
  return (
    <div>
        <header id='product'>
      <div className="container full_height"> 
          <div className="row">
            <div className="column">
              <h1 className="title">
              Iweowo: Generating Invoices, {""} 
                <span className='g-text'>Powering Busines</span>
              </h1>
              <p className="text_muted description">
              Iweowo makes invoicing fast and effortless, allowing you to generate professional invoices in seconds while seamlessly tracking payments. Stay on top of your finances with automated reminders and never miss a due date. Access your invoices anytime, from any device, ensuring smooth business operations.
              </p>
              <div className="buttons_container">
              
                <a className='btn btn_primary' href="https://iweowo.com" target="_blank" rel="noopener noreferrer">Get Started</a>

              </div>
            </div>
            <div className="column">
              <div className="image_container">
                <img src={product} alt="" />
              </div>
            </div>
          </div>
      </div>
    </header>
    </div>
  )
}

export default Product