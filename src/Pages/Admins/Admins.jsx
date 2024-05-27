
import Header from '../../Components/header';

import './module.admin.css';
import { AdminsData } from '../TableData';
import plusIcon from '../../assets/images/plusIcon.svg';
import { useLocation } from 'react-router-dom';
import TableComponent from '../../Components/CommonTableComponent/TableComponent';
import BoxAndIcon from '../../Components/BoxAndIconComponent/BoxAndIcon';
import { Link } from 'react-router-dom';
const Admins = () => {
  const {pathname} = useLocation();
  console.log(pathname)
  return (
    <div className='Admin'>
        <Header  />
      <div className='admin-header'>
       <div className='admin-mainText'>
      <h1>Admins</h1>
      <p>Manage Admins added to manage your platform</p>
       </div>

       <Link to="/admins/addadmin " className='link'>
       <BoxAndIcon
 
 text="Add Admin"
border=".5px solid #000040"
className="filter-box"
bgColor="#000040"
flexDirection="row-reverse"
icon={plusIcon}
color="white"
/>
       
       </Link>


       </div>

<TableComponent pathname={pathname} placeholder="Search Admins ..."
Data={AdminsData}
/>
    </div>
  )
}

export default Admins;
