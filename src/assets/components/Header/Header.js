import React from 'react'
import Navbar from './Navbar'

const Header = ({showMenu, setShowMenu}) => {
  return (
    <header className="header">
      <div className="header__overlay" />
        <Navbar 
        showMenu={showMenu}
        setShowMenu={setShowMenu} />
    </header>
  )
}

export default Header