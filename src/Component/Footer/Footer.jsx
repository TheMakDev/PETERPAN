import React from 'react'
import "./Footer.css"
import Logo from "../Logo/Logo"
import { footer } from '../../data'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <footer id='footer'>
      <div className="container">
        <div className="row">
          <div className="column">
            <Logo className="logo"/>
            <form className="newsletter">
              <h3>Get Weekly update</h3>
              <div className="control_container">
                <input type="email" placeholder='Enter your email address' className='control' />
                <button className="btn" type='button'>Subscribe</button>
              </div>
            </form>
          </div>
            {
              footer.map((list, index) =>(
                <div className="column" key={index}>
                  <div className="routes_name">{list.name}</div>
                  <div className="routes_container">
                    {
                      list.routes.map((route, i) => (
                        <Link to={route.id} className='route_item'>
                            <p className="name">{route.name}</p>
                        </Link>
                      ))
                    }
                  </div>
                </div>
              ))
            }
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <h3>Copyright &copy; All Rights Reserved | 2025</h3>
          <p className='text_muted'>PeterPan IT Solutions</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer