import React from 'react'
import "./Contact.css"
import { contacts } from "../../data"

const Contact = () => {
  return (
    <section id='contact'>
      <div className="container">
        <div className="contact_form">
          <div className="contact_form_top">
            <h1 className="title">
              <span className='g-text'>Join forces with us</span>
            </h1>
            <p className="text_muted">
            We build with precision and passion, creating systems that stand the test of time. It's as straightforward as that!
            </p>
          </div>
          <div className="contact_form_middle">
            <div className="row">
              <input type="text" placeholder='First Name' name='firstname' className='control' />
              <input type="text" placeholder='Last Name' name='lastname' className='control' />
            </div>
            <div className="row">
              <input type="email" placeholder='Email Address' name='email' className='control' />
              <input type="tel" placeholder='Phone Number' name='phone' className='control' />
            </div>
            <textarea name="message" cols={30} rows={10} placeholder='Messagw' className='control' id=""></textarea>
          </div>
          <div className="contact_form_bottom">
            <button className="btn btn_primary">Send Now</button>
          </div>
        </div>
        <div className="contact_options">
          {
            contacts.map((contact,index) =>(
              <div className="option" key={index}>
                <div className="icon_container">
                  {contact.icon}
                </div>
                <h3 className='name'>{contact.name}</h3>
                <h4 className="text_muted">{contact.value}</h4>
                <div className="">
                  <a href={"#"} className='btn btn_primary'>Contact Us</a>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Contact