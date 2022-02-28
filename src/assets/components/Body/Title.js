import React from 'react'
import logo from '../../images/logo-mastercraft.svg'

const Title = () => {
  return (
    <section className="title">
        <img className="title__logo" src={logo} alt="Mastercraft logo" />
        <h1 className="title__heading">
            Mastercraft Bamboo Monitor Riser
        </h1>
        <p className="title__subheading">
            A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <ul className="title__btn-list">
            <li className="title__btn-item">
                <button className="title__btn">
                    Back this project
                </button>
            </li>
            <li className="title__btn-item">
                <label className="title__bookmark">
                    <input type="checkbox" />
                    <span className="title__toggle">
                    </span>
                </label>
            </li>
        </ul>
    </section>
  )
}

export default Title