import React, { useEffect, useState } from 'react';
import Header from '../../Components/header';
import Sidebar from '../../Components/Sidebar';
import './module.pharmacy.css';
import SearchIcon from '../../assets/icons/Search.svg';
import TableComponent from '../../Components/CommonTableComponent/TableComponent';
import { CustomerData } from '../TableData';
import { useLocation } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';
import axios from 'axios';

const Pharmacies = () => {
  const { user } = useAuthContext();
  const { pathname } = useLocation();
  const [pharmaciesData, setPharmaciesData] = useState([]); 


  useEffect(() => {
    const fetchPharmaciesData = async () => {
      try {
        const response = await axios.get('https://staging.medfinder.com.ng/api/v1/admin/pharmacies', {
          headers: {
            Authorization: `Bearer ${user.token}` // Include the token in the Authorization header
          }
        });
        setPharmaciesData(response.data.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchPharmaciesData();
  }, [user]); // Dependency array includes 'user' to refetch data when user changes

// console.log("pharm data : " ,pharmaciesData)


const formattedData = pharmaciesData.map(item => ({
  id:item._id,
  col1: item.company_name,
  col2: item.admin_approval,
  col3: item.address,
  col4: item.email,
  col5: item.verified
}));

// Now, formattedData is an array of objects with the required structure
console.log("this is formatted data: ", formattedData);

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
      
<TableComponent

pathname={pathname}
placeholder="Search pharmacies..."
Data={formattedData}
viewlink={true}
viewPath="/pharmacies/viewpharmacy"
/>
    </div>
  )
}

export default Pharmacies;
