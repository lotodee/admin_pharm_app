import React from 'react';
import SearchIcon from '../assets/icons/Search.svg';
import BellIcon from '../assets/images/Bell.svg';
import BoxIcon from '../assets/images/Messages.svg';
import UserIcon from '../assets/images/Selfie.svg';
import "./module.header.css";
import Search from './SearchComponent/Search';
import user from "../assets/images/profileUser.svg"
import settings from "../assets/images/profileSettings.svg"
import logoutButton from "../assets/images/profileLogout.svg"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';

const Header = () => {
const {logout} = useLogout()
  const [showAction , setShowAction] = useState(false)

  const handleLogout = () =>{
    logout();
  }

  return (
    <div className='HeaderBox'>
      
     
      <Search text="Search..." 
      marginLeft="30px"
      />

      <div className='icons'>
      <div className='message'>
         <span>2</span>
        <img src={BoxIcon} alt='Message' />
      </div>

      <Link to="/notifications">
      <div className='BellIcon'>
        <span>2</span>
        <img src={BellIcon} alt='Notification' />
      </div>
      </Link>

      <div className='Profile' onClick={()=>{setShowAction(!showAction)}}>
        <img src={UserIcon} alt="Profile" />

      </div>
      
    </div>
{showAction && (

<div className="profile-options">
<div className="my-profile">
  <img src={user} alt="" />
  <p>My Profile</p>
</div>
<div className="settings">
  <img src={settings} alt="" />
  <p>Settings</p>
</div>
<div className="logout"
onClick={logout}
>
  <img src={logoutButton} alt="" />
  <p style={{color:'red'}}>Logout</p>
</div>
</div>
)}
    </div>
  )
}

export default Header;
