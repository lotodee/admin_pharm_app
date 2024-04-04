import React from 'react'
import BoxAndIcon from '../../Components/BoxAndIconComponent/BoxAndIcon'
import "./module.notifications.css"
import push from "../../assets/images/push.svg"
import Header from '../../Components/header'
import NofiticationsComponent from '../../Components/NotificationComponent/NofiticationsComponent'
const Notifications = () => {
  return (
    <>
    <Header/>
    <div className="notifications-top-section">
        <div className="left">
            <h1>All Notifications</h1>
            <p>View all activities</p>
        </div>
        <BoxAndIcon
 
 text="Push Notification"
border=".5px solid #000040"
className="filter-box"
bgColor="#000040"
flexDirection="row-reverse"
icon={push}
color="white"
/>
    </div>
    <div className="notifications-bottom-section">
        <NofiticationsComponent/>
        <NofiticationsComponent/>
        <NofiticationsComponent/>
        <NofiticationsComponent/>
        <NofiticationsComponent/>
    </div>
    </>
  )
}

export default Notifications