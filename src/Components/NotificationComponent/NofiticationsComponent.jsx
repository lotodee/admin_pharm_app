import React from 'react'
import "./module.notificationscomponent.css"
import Panadol from '../../assets/images/Panadol.svg';
import ReviewImg from '../../assets/images/reviewimg.svg';
const NofiticationsComponent = () => {
  return (
  <div className="notifications-container">
    <img src={ReviewImg} alt="" />
    <div className="right">
        <p className="toptext">Gleeworld Pharmacy added a new product Panadol pain & fever</p>
        <p className="bottomtext">12 mins ago</p>

    </div>
  </div>
  )
}

export default NofiticationsComponent