import React from 'react'

const Reward = ({id, header, criteria, 
                 description, left, setRewardId}) => {
                     
  const handleClick = e => {
      setRewardId(e.target.id);
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

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
            <button 
            id={id} 
            className={left == "0"? "reward__select reward__select--out": "reward__select"} 
            onClick={handleClick}>
                Select Reward
            </button>
        </div>
    </div>
  )
}

export default Reward