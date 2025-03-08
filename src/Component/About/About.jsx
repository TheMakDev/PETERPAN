import React from 'react'
import "./About.css"
import { about_image,building_1,building_3,building_4 } from '../../assets'
import { FaCheck } from 'react-icons/fa'
import { Link } from 'react-scroll'

const About = () => {
  return (
    <section id='about'>
      <div className="container">
        <div className="column company_photo">
            <img src={about_image} alt="" />
        </div>
        <div className="column">
          <h1 className="title">
            <span className='g-text'>About Us</span>
          </h1>
          <h3 className='sub_title'>Transforming Visions with Core Innovation.</h3>
          <div className="company_media_container">
            <div className="box">
              <img src={building_1} alt="" />
            </div>
            <div className="box">
              <img src={building_3} alt="" />
            </div>
            <div className="box">
              <img src={building_4} alt="" />
            </div>
          </div>
          <p className="text-muted description">
          PeterPan IT Solutions thrives to be one of the leaders in the future of technology in sub-Saharan Africa. Using Aritificial Intellignce, we are determined to building intelligent, cutting-edge, market-ready, and responsible applications by leveraging on Azure AI where there are out-of-the-box and prebuilt and customizable APIs and models. Additionaly, we continue to deliver top notch traditional IT services (onprem and in the cloud) such as cybersecurity, softwared developoment, database management, web and cloud solutions, and network administration. We help businesses, from small to mid-sized institutions, set up and manage efficient IT structures. Our client-focused approach ensures seamless partnerships, cost-effective solutions, and proactive recommendations. We prioritize long-term relationships through after-sales services and service level agreements. Our goal is to optimize technology for efficiency and business growth.
          </p>
          <div className="group">

            <div className="row">
              <div className="icon_container">
                <FaCheck/>
              </div>
              <div className="details">
                <p className='text_muted'>Creative</p> 
                <h3>People</h3>
              </div>
            </div>

            <div className="row">
              <div className="icon_container">
                <FaCheck/>
              </div>
              <div className="details">
                <p className='text_muted'>Affordable</p> 
                <h3>Charges</h3>
              </div>
            </div>

            <div className="row">
              <div className="icon_container">
                <FaCheck/>
              </div>
              <div className="details">
                <p className='text_muted'>Customer</p>
                <h3>Support</h3>
              </div>
            </div>

            <div className="row">
              <div className="icon_container">
                <FaCheck/>
              </div>
              <div className="details">
                <p className='text_muted'>Innovative</p> 
                <h3>Ideas</h3>
              </div>
            </div>

          </div>

          <div className="buttons_container">
            <Link to='project' smooth={true} className='btn'>Explore</Link>
            <Link to='contact' smooth={true} className='btn btn_primary'>Get a quote</Link>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About