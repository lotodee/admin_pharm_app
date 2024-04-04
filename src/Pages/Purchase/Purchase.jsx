import React from 'react';
import Header from '../../Components/header';
import Sidebar from '../../Components/Sidebar';
import './module.purchase.css';
import { PurchaseData } from '../TableData';
import TableComponent from '../../Components/CommonTableComponent/TableComponent';
import { useLocation } from 'react-router-dom';

const Purchase = () => {
  const {pathname} = useLocation();
  return (
    <div>
        <Header  />
 
 <div className="mainText">
 <h1>Purchase</h1>
      <p>Manage purchases made on your platform</p>
 </div>

     
    
     
    <TableComponent pathname={pathname}
    placeholder="Search Purchase ..."
    withImage ={true}
    Data={PurchaseData}
    />
    
    </div>

  )
}

export default Purchase;
