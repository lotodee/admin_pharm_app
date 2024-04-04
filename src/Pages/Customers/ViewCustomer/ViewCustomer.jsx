import React from 'react'
import Header from '../../../Components/header'
import back from "../../../assets/images/arrowLeft.svg";
import "./module.viewcustomer.css"
import deleteIcon from "../../../assets/images/deleteIcon.svg";
import verified from "../../../assets/images/verified.svg";
import restrict from "../../../assets/images/restrict.svg";
import BoxAndIcon from '../../../Components/BoxAndIconComponent/BoxAndIcon';
import customerImage from "../../../assets/images/customerImage.svg"
import { Link } from 'react-router-dom';
import CommonInputComponent from '../../../Components/CommonInputComponent/CommonInputComponent';
import CashComponent from '../../../Components/DashboardComponent/CashComponent';
import { ViewPharmacyCashData } from '../../../Components/ComponentsData';
import TableComponent from '../../../Components/CommonTableComponent/TableComponent';
import { DashboardData } from '../../TableData';
import { useLocation } from 'react-router-dom';
const ViewCustomer = () => {

    const {pathname} = useLocation();
  return (
   <>
   <Header/>

    <div className="view-customer-top-section">
        <div className="view-customer-top">
    
           <div className="view-customer-top-left">
            <Link to="/customers">
            <img src={back} alt="" />
            </Link>
              
                <p>Mr Yinka Adewole</p>
           </div>
           <div className="view-customer-top-right">

      <BoxAndIcon
                                    text="Verified"
                                    border=".5px solid #000040"
                                    className="filter-box"
                                    bgColor="#000040"
                                    icon={verified}
                                    flexDirection="row-reverse"
                                    color="white"
                                />

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
        <div className="view-customer-middle">
         
         <div className="view-customer-middle-left">
            {/* <img src={customerImage} alt="" className="customer-image" /> */}

         </div>
         <div className="view-customer-middle-right">
            <div className="view-customer-middle-right-top">
            <CommonInputComponent small={true} width="420px"  labelText="First Name" />
            <CommonInputComponent small={true} width="420px"  labelText="Last Name" />
            <CommonInputComponent small={true} width="420px"  labelText="Email" />
           
            </div>
            <div className="view-customer-middle-right-bottom">
            <CommonInputComponent small={true} width="460px"  labelText="Phone" />
            <CommonInputComponent small={true} width="820px"  labelText="Delivery Address" />
            </div>
         </div>
    

        </div>
        <div className="view-customer-bottom">
        <CashComponent Data={ViewPharmacyCashData }/>
        </div>
    </div>
    <TableComponent
       pathname={pathname}
      topleftText="Purchase History"
      
      placeholder="Search Products ..."
   Data={DashboardData}
   withImage={true}
        />
   </>
  )
}

export default ViewCustomer
