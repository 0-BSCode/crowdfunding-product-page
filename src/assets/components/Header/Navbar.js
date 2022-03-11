import React from 'react'
import logo from '../../images/logo.svg'
import Link from './Link'
import Menu from './Menu'
import hamburger from '../../images/icon-hamburger.svg'

const Navbar = ({showMenu, setShowMenu}) => {

  const handleClick = () => {
    if (showMenu) setShowMenu(false);
    else setShowMenu(true);
  }

  return (
    <nav className="header__navbar">
        <img className="header__logo" src={logo} alt="Site logo" />
        <ul className="header__links">
            <Link content="About" />
            <Link content="Discover" />
            <Link content="Get Started" />
        </ul>
        <img 
        className="header__menu" 
        src={hamburger} 
        alt="Hamburger menu"
        onClick={handleClick} />
    </nav>
  )
}

export default Navbar