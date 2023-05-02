import React from 'react'
import './header.css'
import CTA from './CTA';
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials';
const Header = () => {
  return (
      <header>
        <div className="container header__container">
          <h5>Hey this is</h5>
          <h1>Abhishek Panwar</h1>
          <h5 className='text-light'>Student @IIIT Kota CSE</h5>
          <CTA/>
          <HeaderSocials/>
        <div className='me'>
          <img src={ME} alt='me'/>
        </div>
        <a href='#contact' className='scroll_down'>Scroll Down</a>
        </div>
        </header>


  )
}

export default Header