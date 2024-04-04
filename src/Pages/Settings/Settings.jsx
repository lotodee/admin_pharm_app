import React from 'react';
import CommonInputComponent from '../../Components/CommonInputComponent/CommonInputComponent';
import Header from '../../Components/header';
import Sidebar from '../../Components/Sidebar';
import './module.settings.css';


const Settings = () => {
  return (
    <div>
        <Header  />

 {/* ============= GENERAL SETTINGS =========== */}

    <div className="settings-top">
  <div className="settings-text">
    <h1>General Settings</h1>
    <p>Manage General Settings</p>
  </div>
  <div className="settings-inputs">
    <CommonInputComponent small={true} labelText="Admin Name"/>
    <CommonInputComponent small={true} labelText="Email"/>
    <CommonInputComponent small={true} labelText="Phone"/>

  </div>
  <div className="button-div">
  <button className='button'>
   Save Changes
  </button>
  </div>
 
    </div>
   
    {/* ============= GENERAL SETTINGS =========== */}



     {/* ============= SECURITY SETTINGS =========== */}


     <div className="settings-top">
  <div className="settings-text">
    <h1>Security Settings</h1>
    <p>Manage your Security</p>
  </div>
  <div className="settings-inputs">
    <CommonInputComponent small={true} labelText="Admin Name"/>
    <CommonInputComponent small={true} labelText="Email"/>
    <CommonInputComponent small={true} labelText="Phone"/>

  </div>
  <div className="button-div">
  <button className='button'>
   Reset Password 
  </button>
  </div>
 
    </div>

     {/* ============= SECURITY SETTINGS =========== */}


     <div className="settings-top">
  <div className="settings-text">
    <h1>Account Settings</h1>
    <p>Manage your account</p>
  </div>
   
 <div className="settings-actions">

<div className="clear">
  <p>Clear Search History</p>
</div>
<div className="clear">
  <p>Clear Notification History</p>
</div>
<div className="clear">
  <p>Clear Notification History</p>
</div>


 </div>
  
 
    </div>
    




    </div>


  )
}

export default Settings;
