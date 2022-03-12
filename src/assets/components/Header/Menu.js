import React from 'react'
import Link from './Link'

const Menu = () => {

  return (
    <ul className="header__menu-links">
      <Link content="About" />
      <div className="header__hline" />
      <Link content="Discover" />
      <div className="header__hline" />
      <Link content="Get Started" />
    </ul>

  )
}

export default Menu