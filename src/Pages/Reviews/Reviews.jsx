import React from 'react';
import Header from '../../Components/header';
import Sidebar from '../../Components/Sidebar';
import './module.reviews.css';
import SearchIcon from '../../assets/icons/Search.svg';
import ReviewImg from '../../assets/images/reviewimg.svg';
import Panadol from '../../assets/images/Panadol.svg';
import ReviewComponent from '../../Components/ReviewComponent/ReviewComponent';
import Search from '../../Components/SearchComponent/Search';
import BoxAndIcon from '../../Components/BoxAndIconComponent/BoxAndIcon';
import filterIcon from "../../assets/images/FilterIcon.svg";
import deleteIcon from "../../assets/images/deleteIcon.svg";
const Reviews = () => {
  return (
    <div>
        <Header  />
       <div className='Heading'>
       <h1>Reviews</h1>
       <p>Discover what our clients have to say about their experiences with our services</p>   
       </div> 
      
       <div className='table'>
        <div className='tableheader'>
        {/* <div className='searchtable'>
       <img src={SearchIcon} alt="Search"  />
        <input placeholder='Search Reviews...' />
      </div> */}
          <Search text="Search Reviews..."/>
        
    
       <div className='tableButtons'>
       <BoxAndIcon
 icon={filterIcon}
 text="Filter"
border=".5px solid #000040"
className="filter-box"/>


<BoxAndIcon
 icon={deleteIcon}
 text="Delete"
bgColor="red"
flexDirection="row-reverse"
color="white"
border="none"
className="filter-box"/>
        </div>
        </div>
      
       <div className='reviews'>

   <ReviewComponent/>



     
     
      </div>
       </div>

    </div>
  )
}

export default Reviews;
