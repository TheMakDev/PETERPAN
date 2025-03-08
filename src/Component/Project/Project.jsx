import React from 'react'
import "./Project.css"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from '../../data';

const Project = () => {
  const settings ={
    infinite: true,
    speed: 3000,
    slidesToShow: 2,
    centerMode : true,
    pauseOnHover: true,
    autoPlay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 600,
      settings:{
        slidesToShow :1,
        centerPadding : 0,
      }
      }
      
    ]

  }
  return (
    <section id='portfolio'>
      <div className="project_top">
        <h1 className="title">Our <span className="g-text">Project</span></h1>
        <h3 className="sub_title">
        Innovative Solutions projects, exceptional craftsmanship.
        </h3>
      </div>
      <Slider {...settings} className='projects_container'>
        {
          projects.map((project, index) => (
            <React.Fragment key={index}>
              <div className="image_container">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="box">
                <h1 className="name">{project.title}</h1>
              </div>
              <div className="details">
                <h3 className='name'>{project.title}</h3>
                <p className='text_muted descripton'>{project.description}</p>
                <button className='btn'>Read more</button>
              </div>
            </React.Fragment>
          ))
        }
      </Slider>
    </section>
  )
}

export default Project