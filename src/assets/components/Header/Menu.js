import React from 'react'
import Link from './Link'
import hamburger from '../../images/icon-hamburger.svg'

const Menu = () => {

  const showMenu = () => {
    const mobileMenu = document.querySelector(".header__menu-links");
    mobileMenu.classList.toggle("header__menu-links--visible");
    console.log(mobileMenu);
  }

  return (
    <>
        <img 
        className="header__menu" 
        src={hamburger} 
        alt="Hamburger menu"
        onClick={showMenu} />
        <div className="header__menu-links">
            <Link content="About" />
            <Link content="Discover" />
            <Link content="Get Started" />
        </div>
    </>

  )
}

export default Menu