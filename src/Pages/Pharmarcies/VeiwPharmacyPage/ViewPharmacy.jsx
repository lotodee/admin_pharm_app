import React, { useEffect, useState } from 'react'
import "./module.viewpharmacy.css"
import back from "../../../assets/images/arrowLeft.svg";
import filterArrow from '../../../assets/images/filterArrow.svg';
import deleteIcon from "../../../assets/images/deleteIcon.svg";
import verified from "../../../assets/images/verified.svg";
import restrict from "../../../assets/images/restrict.svg";
import Header from '../../../Components/header';
import BoxAndIcon from '../../../Components/BoxAndIconComponent/BoxAndIcon';
import { ViewPharmacyCashData } from '../../../Components/ComponentsData';
import CashComponent from '../../../Components/DashboardComponent/CashComponent';
import { DashboardData } from '../../TableData';
import TableComponent from '../../../Components/CommonTableComponent/TableComponent';
import { Link } from 'react-router-dom';
import received from '../../../assets/images/orderReceived.svg';
import count from '../../../assets/images/orderCount.svg';
import rejected from '../../../assets/images/orderRejected.svg';
import accepted from '../../../assets/images/orderAccepted.svg';
import { fetchPharmaciesData, fetchPharmaciesInventoryData } from '../../../utils/request';
import { useAuthContext } from '../../../hooks/useAuthContext';
import { useParams } from 'react-router-dom';
const ViewPharmacy = () => {
  
const {id} = useParams()
console.log("pharm id is " , id)
  const { user } = useAuthContext();
  const [pharmacyReviewsData, setpharmacyReviewsData] = useState([]); 
  const [pharmacyInventoryData, setpharmacyInventoryData] = useState([]); 


  useEffect(() => {
    const fetchData = async () => {
      try {
        const pharmacyDataResponse = await fetchPharmaciesData(user.token,id); 
       const pharmaciesInventoryData =  await fetchPharmaciesInventoryData(user.token,id);
        
        setpharmacyReviewsData(Object.values(pharmacyDataResponse))
        console.log("the pahrm inventrD" , pharmaciesInventoryData)
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); 
   
  }, [user]); // Dependency array includes 'user' to refetch data when user changes





  return (

    
  <>
  <Header/>


  <div className="view-pharmacy-top-section">
    <div className="view-pharmacy-top">
      <div className="view-pharmacy-left">
        <Link to="/pharmacies">
        <img src={back} alt="" />
        </Link>
        <div className="text-details">
          <h1>Gleeworld Pharmacy</h1>
          <div className="details">
            <p>Details</p>
            <img src={filterArrow} alt="" />
          </div>
        </div>
      </div>
      <div className="view-pharmacy-right">
        

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
    <div className="view-pharmacy-bottom">


      <CashComponent  topText="Total Order Received"
      cashImage={received}
      bottomText={pharmacyReviewsData[0]}
      />


     <CashComponent
      topText="Inventory Count"
     bottomText={pharmacyReviewsData[1]}
    
     cashImage={count}
     />

     <CashComponent
       topText="Order Accepted"
       bottomText={pharmacyReviewsData[2]}
      
       cashImage={accepted}
     
     />

     <CashComponent
      topText="Order Rejected"
      bottomText={pharmacyReviewsData[3]}
     
      cashImage={rejected}
     />
    </div>


  </div>

  <div className="view-pharmacy-bottom-section">
    <TableComponent Data={DashboardData}
    topleftText="Inventory"
    placeholder="Search Inventory..."
    />
  </div>
  </>
  )
}

export default ViewPharmacy
