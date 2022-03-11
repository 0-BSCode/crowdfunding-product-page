import React from 'react'
import Link from './Link'
import hamburger from '../../images/icon-hamburger.svg'

const Menu = () => {

  return (
    <div className="header__menu-links">
      <Link content="About" />
      <div className="header__hline" />
      <Link content="Discover" />
      <div className="header__hline" />
      <Link content="Get Started" />
    </div>

  )
}

export default Menu