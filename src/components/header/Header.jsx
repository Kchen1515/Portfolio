import React from 'react'
import './header.css'
import ME from '../../assests/me.jpg'
import CTA from './CTA'

import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div id="home" className="container header__container">
        <h5>Hello, my name is</h5>
        <h1 className='my_name'>Kong Yu Chen</h1>
        <h5 className="text-light">I am a Front End Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img className="my-img" src={ME} alt="Kong Yu Chen"/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>

    </header>
  )
}

export default Header