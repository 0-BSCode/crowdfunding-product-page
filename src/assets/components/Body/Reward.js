import React from 'react'

const Reward = ({header, criteria, description,
                 left}) => {
  return (
    <div className={left == "0" ? "reward reward--out": "reward"}>
        <div className="reward__title">
            <h4 className="reward__header">
                {header}
            </h4>
            <p className="reward__criteria">
                Pledge ${criteria} or more
            </p>
        </div>
        <div className="reward__description">
            {description}
        </div>
        <div className="reward__footer">
            <p className="reward__left">
                {left} <span>left</span>
            </p>
            <button className="reward__select">
                Select Reward
            </button>
        </div>
    </div>
  )
}

Reward.defaultProps = {
    out: false
}

export default Reward