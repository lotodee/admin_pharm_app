
import Header from '../../Components/header';

import './module.customers.css';

import { useLocation } from 'react-router-dom';
import TableComponent from '../../Components/CommonTableComponent/TableComponent';
import { CustomerData } from '../TableData';

const Customers = () => {
  const {pathname} = useLocation();
  console.log(pathname)
  return (
    <div>
        <Header  />
        <div className="customer-header">
        <h1 className=''>Customers</h1>
      <div className='Stats'>
       <p>All (2032)</p> 
       <p>Verified (202)</p> 
       <p>Pending (1602)</p> 
       <p>Reacted (228)</p> 
      </div>

        </div>
    


        <TableComponent pathname={pathname} placeholder="Search Customers ..." Data={CustomerData}
        viewlink={true}
        viewPath={"/customers/viewcustomer"}
        />

    </div>
  )
}

export default Customers;
