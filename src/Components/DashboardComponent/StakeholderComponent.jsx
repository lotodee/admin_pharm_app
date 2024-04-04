import React from 'react'
import "./module.stakeholdercomponent.css"
import Users from '../../assets/images/Users.svg';
const StakeholderComponent = ({topText,bottomText,image,color}) => {
  return (
    <div className="main-Box" 
    style={{backgroundColor:`${color}`}}
    >
        
        <div className="stake-container">
            <div className="stake-texts">
            <div className="stake-topText">{topText}</div>
            <div className="stake-bottomText">{bottomText}</div>
            </div>
            <img className='stake-image' src={image} alt="" />
        </div>
    </div>
  )
}

export default StakeholderComponent