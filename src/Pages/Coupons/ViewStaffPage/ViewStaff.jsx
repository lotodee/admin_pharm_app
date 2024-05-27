
import BoxAndIcon from '../../../Components/BoxAndIconComponent/BoxAndIcon'
import Header from '../../../Components/header'
import deleteIcon from "../../../assets/images/deleteIcon.svg";
import back from "../../../assets/images/arrowLeft.svg";
import click from "../../../assets/images/click.svg";
import unclick from "../../../assets/images/unclick.svg";
import restrict from "../../../assets/images/restrict.svg";
import "./module.ViewStaff.css"
import CommonInputComponent from '../../../Components/CommonInputComponent/CommonInputComponent';
import Search from '../../../Components/SearchComponent/Search';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CashComponent from '../../../Components/DashboardComponent/CashComponent';
import received from '../../../assets/images/orderReceived.svg';
import staffs from '../../../assets/images/staffs.svg';
import rejected from '../../../assets/images/orderRejected.svg';
import accepted from '../../../assets/images/orderAccepted.svg';
const ViewStaff = () => {


   const permissions = [
    {permission:"Permission to remove pharmacies"},
    {permission:"Add new products to the inventory"},
    {permission:"Approve pending pharmacies onboarding the platform"},
    {permission:"Push notifications to all the users on the platform"},
    {permission:"Notify the pharmacies on the renewal of the required documents "},
    {permission:"Restrict pharmacies from uploading new products to the platform"},
   ]


    const [allowclicked , allowsetClicked] = useState(false);
    const [restrictclicked , restrictsetClicked] = useState(false);
  return (
   <>
   <Header/>

   <div className="addadmin-top-section">
   <div className="addadmin-top">
   <div className="addadmin-top-left">
   <Link to="/coupons">
            <img src={back} alt="" />
            </Link>
        <p>myStashTechnologies</p>
    </div>
    <div className="addadmin-top-right">
    <BoxAndIcon
                                icon={restrict}
                                text="Restrict"
                                flexDirection="row-reverse"
                                border=".5px solid #000040"
                                className="filter-box"
                            />
                       
                               
                        
                            <BoxAndIcon
                                icon={deleteIcon}
                                text="Delete"
                                bgColor="red"
                                flexDirection="row-reverse"
                                color="white"
                                border="none"
                                className="filter-box"
                            />

    </div>
   </div>
   <div className="addadmin-bottom">
    <div className="addadmin-bottom-left">

    </div>
    <div className="addadmin-bottom-right">
    <CommonInputComponent small={true} width="420px"  labelText="Admim Name" />
    <CommonInputComponent small={true} width="420px"  labelText="Date Added" />
    <CommonInputComponent small={true} width="490px"  labelText="Email" />
</div>
   </div>
   </div>


   <div className="view-staff-cashcomponent">
  <CashComponent  topText="Total Orders "
      cashImage={received}
      bottomText="200"
      />

<CashComponent
       topText="Orders Bought"
       bottomText="1002"
      
       cashImage={accepted}
     
     />
     <CashComponent
      topText="Staffs"
     bottomText="15"
    
     cashImage={staffs}
     />

    

     <CashComponent
      topText="Orders Cancelled"
      bottomText="32"
     
      cashImage={rejected}
     />
  </div>



   <div className="addadmin-bottom-section">
    <Search text="Search Staffs..."
    width="500px"
    />
  

 



 <div className="permissions">
 <div className="permissions-header">
        <div className="permissions-header-left">

         <p className="permission-header-text">PERMISSIONS</p>
        </div>
        <div className="permissions-header-right">
            <div className="allow-header">ALLOW</div>
            <div className="restrict-header">RESTRICT</div>
        </div>
    </div>
    {permissions.map((item,index)=>(
  <div className="permissions-body"key={index}>
  <div className="permission-body-left">
      {item.permission}
  </div>
  <div className="permission-body-right">
      <div className="allow-body">
          
          <img src={ allowclicked === true ? click : unclick} alt=""  className='radios' onClick={()=>{allowsetClicked(!allowclicked)}}/>
        
      </div>
      <div className="restrict-body">
      <img src={ restrictclicked === true ? click : unclick} alt=""  className='radios' onClick={()=>{restrictsetClicked(!restrictclicked)}}/>
      </div>
  </div>
</div>


    ))}
  

    
 </div>
   </div>
   </>
  )
}

export default ViewStaff


