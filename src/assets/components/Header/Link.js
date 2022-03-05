import React from 'react'

const Link = ({content}) => {
  return (
    <li className="header__link">
        <a>{content}</a>
    </li>
  )
}

export default Link