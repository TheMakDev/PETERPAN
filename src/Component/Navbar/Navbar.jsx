import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css';
import { navTabs } from '../../data';
import { Link } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';
import { RiMenu3Fill } from 'react-icons/ri';
import Logo from '../Logo/Logo';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";


const Navbar = () => {

  const container =useRef(null)

  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const currentScrollPosition = window.scrollY;
    console.log('Current scroll position:', currentScrollPosition);
    if (currentScrollPosition > 145) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (visible) {
      gsap.fromTo('.navbar', { y: -250 }, { y: 0, top: 0 });
    }
  }, [visible]);


  useGSAP(() =>{
    const timeline = gsap.timeline({stagger:.5})
    timeline
    .from(".logo",{opacity:0, x:100, delay:1})
    .from(".tab", {opacity:0,stagger: .5})
    .from(".buttons",{opacity:0,x:100})
  },{scope:container})
  

  return (
    <nav className={`navbar ${visible ? 'visible' : ''}`} ref={container}>
      {open ? <div className="sidebar_overlay" onClick={() => setOpen(false)}></div> : null}
      <Logo />
      <div className={`box nav_tabs ${open ? 'open' : ''}`}>
        <div className="icon_container cancel_btn" onClick={() => setOpen(false)}>
          <FaTimes />
        </div>
        {navTabs.map((tab, index) => (
          <Link
            to={tab.id}
            key={index}
            className="tab"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-70}
            onClick={() => setTimeout(() => setOpen(false), 100)}
          >
            {tab.name}
          </Link>
        ))}
      </div>
      <div className="box buttons">
        <Link to="contact" className="btn contact_btn" onClick={() => setTimeout(() => setOpen(false), 100)}>
          Contact Us
        </Link>
        <div className="icon_container menu_btn" onClick={() => setOpen(!open)}>
          <RiMenu3Fill />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
