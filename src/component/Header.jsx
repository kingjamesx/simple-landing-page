import React from 'react'
import logo from '../assets/images/logo.png'
const Header = () => {
  return (
    <div className='header'>
        <span> <img src={logo} alt="company-logo" /></span>
        <button className='header-btn'>Request a call</button>
    </div>
  )
}

export default Header