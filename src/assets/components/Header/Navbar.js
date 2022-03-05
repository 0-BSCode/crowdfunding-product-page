import React from 'react'
import logo from '../../images/logo.svg'
import Link from './Link'

const Navbar = () => {
  return (
    <nav className="header__navbar">
        <img className="header__logo" src={logo} alt="Site logo" />
        <ul className="header__links">
            <Link content="About" />
            <Link content="Discover" />
            <Link content="Get Started" />
        </ul>
    </nav>
  )
}

export default Navbar