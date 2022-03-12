import React from 'react'
import logo from '../../images/logo.svg'
import Link from './Link'
import hamburger from '../../images/icon-hamburger.svg'
import close from '../../images/icon-close-menu.svg'

const Navbar = ({showMenu, setShowMenu}) => {

  const handleClick = (e) => {
    if (showMenu) {
      setShowMenu(false);
      e.target.setAttribute('src', hamburger);
    }
    else {
      setShowMenu(true);
      e.target.setAttribute('src', close);
    }
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