import React from 'react';
import Header from '../../Components/header';
import Sidebar from '../../Components/Sidebar';
import './module.pharmacy.css';
import SearchIcon from '../../assets/icons/Search.svg';
import TableComponent from '../../Components/CommonTableComponent/TableComponent';
import { CustomerData } from '../TableData';
import { useLocation } from 'react-router-dom';
const Pharmacies = () => {
  const {pathname} = useLocation();
  return (
    <div>
        <Header  />
      <div className='pharm-header'>
        <h1>
          Pharmacies
        </h1>
        <div className='Stats'>
       <p>All(2032)</p> 
       <p>Verified(202)</p> 
       <p>Pending(1602)</p> 
       <p>Reacted(228)</p> 
      </div>
      </div>
      

      {/* <div className='table'>
        <div className='tableheader'>
        <div className='searchtable'>
       <img src={SearchIcon} alt="Search"  />
        <input placeholder='Search Pharmacies...' />
      </div>
         
        
    
       <div className='tableButtons'>
        <div>
         <p>Filter</p>
         <img  src="" />
        </div> 

        <div>
          <img src="" />  
          <p>Delete</p>  
        </div>
        </div>
        </div>
        

        <div className='tableList'>
            <div>
            <img src="" alt="" />
            <h5>PHARMACY</h5>
            <h5>VERIFICATION</h5>
            <h5>ADDRESS</h5>
            <h5>EMAIL</h5>
            <h5>STATUS</h5>
            <h5>ACTION</h5>
            </div>

            <div>
            <img src="" alt="" />
            <h5>Gleeworld Pharmacy</h5>
            <h5>Approved</h5>
            <h5>44, Gleeworld street,<br /> Lagos, Nigeria</h5>
            <h5>gleeworld247@gmail.com</h5>
            <h5>btn</h5>
            <h5>...</h5>
            </div>

            <div>
            <img src="" alt="" />
            <h5>Gleeworld Pharmacy</h5>
            <h5>Approved</h5>
            <h5>44, Gleeworld street,<br /> Lagos, Nigeria</h5>
            <h5>gleeworld247@gmail.com</h5>
            <h5>btn</h5>
            <h5>...</h5>
            </div>

            <div>
            <img src="" alt="" />
            <h5>Gleeworld Pharmacy</h5>
            <h5>Pending</h5>
            <h5>44, Gleeworld street,<br /> Lagos, Nigeria</h5>
            <h5>gleeworld247@gmail.com</h5>
            <h5>btn</h5>
            <h5>...</h5>
            </div>

            <div>
            <img src="" alt="" />
            <h5>Gleeworld Pharmacy</h5>
            <h5>Rejected</h5>
            <h5>44, Gleeworld street,<br /> Lagos, Nigeria</h5>
            <h5>gleeworld247@gmail.com</h5>
            <h5>btn</h5>
            <h5>...</h5>
            </div>
            
            <div>
            <img src="" alt="" />
            <h5>Gleeworld Pharmacy</h5>
            <h5>Approved</h5>
            <h5>44, Gleeworld street,<br /> Lagos, Nigeria</h5>
            <h5>gleeworld247@gmail.com</h5>
            <h5>btn</h5>
            <h5>...</h5>
            </div>

            <div>
            <img src="" alt="" />
            <h5>Gleeworld Pharmacy</h5>
            <h5>Approved</h5>
            <h5>44, Gleeworld street,<br /> Lagos, Nigeria</h5>
            <h5>gleeworld247@gmail.com</h5>
            <h5>btn</h5>
            <h5>...</h5>
            </div>
        </div>
        </div> */}
<TableComponent

pathname={pathname}
placeholder="Search pharmacies..."
Data={CustomerData}
viewlink={true}
viewPath="/pharmacies/viewpharmacy"
/>
    </div>
  )
}

export default Pharmacies;
