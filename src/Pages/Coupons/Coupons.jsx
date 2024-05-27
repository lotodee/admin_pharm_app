

import Header from '../../Components/header'
import BoxAndIcon from '../../Components/BoxAndIconComponent/BoxAndIcon'
import { useLocation } from 'react-router-dom'
import TableComponent from '../../Components/CommonTableComponent/TableComponent'
import { AdminsData } from '../TableData'
import plusIcon from '../../assets/images/plusIcon.svg';
import "./module.Coupons.css"
import { useState } from 'react'
import CouponModal from "../../Components/CouponModal/CouponModal"
const Coupons = () => {
    const {pathname} = useLocation();
    const [showModal, setShowModal] = useState(false);
    const [showsave ,setShowSave] = useState(false);

    const handleOpenModal = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
  
    const save = () =>{

      setShowSave(true)
    }

  return (
    <div className='Admin'>
        <Header  />
      <div className='admin-header'>
       <div className='admin-mainText'>
      <h1>Coupons</h1>
      <p>Manage coupons generated to make purchase</p>
       </div>

    
       <BoxAndIcon
 
 text="Generate Coupon"
border=".5px solid #000040"
className="filter-box"
bgColor="#000040"
flexDirection="row-reverse"
icon={plusIcon}
color="white"
onClick={handleOpenModal}
/>
       
   


       </div>

<TableComponent pathname={pathname} placeholder="Search Organization ..."
Data={AdminsData}
viewlink={true}
viewPath="/coupons/viewstaff"
/>
<CouponModal show={showModal} onClose={handleCloseModal} cancel={handleCloseModal} handleSave={save} showsave={showsave}/>
      
    
    </div>
  )
}


export default Coupons
