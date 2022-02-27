import React from 'react'
import logo from '../../images/logo.svg'

const Navbar = () => {
  return (
    <nav className="header__navbar">
        <img className="header__logo" src={logo} alt="Site logo" />
        <ul className="header__links">
            <li className="header__link">
                <a>About</a>
            </li>
            <li className="header__link">
                <a>Discover</a>
            </li>
            <li className="header__link">
                <a>Get Started</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar