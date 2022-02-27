import React from 'react'

const Title = () => {
  return (
    <section className="card__title">
        <h1 className="card__heading">
            Mastercraft Bamboo Monitor Riser
        </h1>
        <p className="card__subheading">
            A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <ul className="card__heading-btns">
            <li className="card__heading-btn">
                <button className="card__btn">
                    Back this project
                </button>
            </li>
            <li className="card__heading-btn">
                <label className="card__bookmark">
                    <input type="checkbox" />
                    <span className="card__toggler"></span>
                </label>
            </li>
        </ul>
    </section>
  )
}

export default Title