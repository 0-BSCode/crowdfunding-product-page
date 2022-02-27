import React from 'react'
import check from '../../images/icon-check.svg'

const Thanks = () => {
  return (
    <section className="thanks">
        <img className="thanks__img" alt="Check Mark" src={check} />
        <h3 className="thanks__header">Thanks for your support!</h3>
        <p className="thanks__description">
            Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
            an email once our campaign is completed.
        </p>
        <button className="thanks__btn">
            Got it!
        </button>
    </section>
  )
}

export default Thanks