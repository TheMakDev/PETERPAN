import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Header from './Component/Header/Header'
import About from './Component/About/About'
import Services from './Component/Services/Services'
import Project from './Component/Project/Project'
import Testimonial from './Component/Testimonial/Testimonial'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'
import Team from './Component/Team/Team'
import Blog from './Component/Blog/Blog'
import Product from './Component/Product/Product'
const App = () => {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Services />
    <Team />
    <Project />
    <Product/>
    <Testimonial />
    <Blog />
    <Contact />
    <Footer />
    </>
  )
}

export default App